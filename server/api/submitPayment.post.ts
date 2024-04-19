import { nanoid } from 'nanoid'
import createCheckout from '../utils/createCheckout'
import createOrder from '../utils/createOrder'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const orderId = nanoid()
  const trxAmount = 8.97
  const operationType = 'direct_capture'
  const processingCurrency = 'EUR'
  const paymentChannel = 'e-commerce'

  const checkoutData = await createCheckout({
    type: 'api',
    amount: trxAmount,
    currency: processingCurrency,
    operation_type: operationType,
    order_merchant_id: orderId,
    payment_channel: paymentChannel,
  })

  // if checkout id is generated, submit order with token id
  if (checkoutData.result.code == '011111') {
    const orderData = await createOrder({
      operation_type: operationType,
      token: body.token,
      checkout_id: checkoutData.checkout.checkout_id,
      amount: trxAmount,
      currency: processingCurrency,
      payment_channel: paymentChannel,
      payment_method_name: body.paymentMethodName,
    })

    console.info(orderData)

    return orderData

    //
  } else {
    return checkoutData
  }
})
