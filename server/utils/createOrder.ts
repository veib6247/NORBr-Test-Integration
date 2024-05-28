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

export default async function (
  payload: OrderPayload,
  privateKey: string,
  appUrl: string
) {
  console.info('Creating order...')

  const orderEndpoint = 'https://api-sandbox.norbr.io/payment/order'

  const additionalsparams = {
    order_availability: false,
  }

  const fullPayload = { ...payload, ...additionalsparams }

  try {
    const { data } = await axios({
      method: 'post',
      headers: { 'x-api-key': privateKey, version: '1.0.0' },
      url: orderEndpoint,
      data: fullPayload,
    })

    return data

    //
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data)
      return error.response.data
    }
  }
}
