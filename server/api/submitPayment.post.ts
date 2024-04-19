import axios from 'axios'
import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.info('Parsing body...')
  console.info(body)

  const orderId = nanoid()
  const trxAmount = 8.97
  const processingCurrency = 'EUR'
  const paymentChannel = 'e-commerce'

  const payload = {
    type: 'api',
    amount: trxAmount,
    currency: processingCurrency,
    operation_type: 'direct_capture',
    order_merchant_id: orderId,
    payment_channel: paymentChannel,
  }

  console.info('Creating checkout...')
  const res = await axios({
    method: 'post',
    headers: { 'x-api-key': process.env.NORBR_PRIVATE_KEY, version: '1.0.0' },
    url: 'https://api-sandbox.norbr.io/payment/checkout',
    data: payload,
  })

  console.info(res.data)

  // if checkout id is generated, submit order with token id
  if (res.data.result.code == '011111') {
    console.info('Creating order...')
    const resOrder = await axios({
      method: 'post',
      headers: { 'x-api-key': process.env.NORBR_PRIVATE_KEY, version: '1.0.0' },
      url: 'https://api-sandbox.norbr.io/payment/order',
      data: {
        operation_type: 'direct_capture',
        token: body.token,
        checkout_id: res.data.checkout.checkout_id,
        amount: trxAmount,
        currency: processingCurrency,
        payment_channel: paymentChannel,
        payment_method_name: body.paymentMethodName,
      },
    })

    console.info(resOrder.data)

    return resOrder.data

    //
  } else {
    return res.data
  }
})
