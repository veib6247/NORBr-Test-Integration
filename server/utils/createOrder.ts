import axios from 'axios'

type OrderPayload = {
  operation_type: string
  token: string
  checkout_id: string
  amount: number
  currency: string
  payment_channel: string
  payment_method_name: string
}

export default async function (payload: OrderPayload) {
  console.info('Creating order...')

  const orderEndpoint = 'https://api-sandbox.norbr.io/payment/order'

  try {
    const res = await axios({
      method: 'post',
      headers: { 'x-api-key': process.env.NORBR_PRIVATE_KEY, version: '1.0.0' },
      url: orderEndpoint,
      data: payload,
    })

    return res.data

    //
  } catch (error) {
    console.error(error)
    return error
  }
}
