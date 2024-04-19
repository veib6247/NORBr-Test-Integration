import axios from 'axios'

type CheckoutPayload = {
  type: string
  amount: number
  currency: string
  operation_type: string
  order_merchant_id: string
  payment_channel: string
}

export default async function (payload: CheckoutPayload) {
  console.info('Creating checkout...')

  const checkoutEndpoint = 'https://api-sandbox.norbr.io/payment/checkout'

  try {
    const res = await axios({
      method: 'post',
      headers: { 'x-api-key': process.env.NORBR_PRIVATE_KEY, version: '1.0.0' },
      url: checkoutEndpoint,
      data: payload,
    })

    return res.data

    //
  } catch (error) {
    console.error(error)
    return error
  }
}
