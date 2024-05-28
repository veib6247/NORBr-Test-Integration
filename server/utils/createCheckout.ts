import axios from 'axios'

type CheckoutPayload = {
  type: string
  amount: number
  currency: string
  operation_type: string
  order_merchant_id: string
  payment_channel: string
  customer_email: string
  customer_first_name: string
  customer_last_name: string
  customer_street_name: string
  customer_city: string
  customer_zip_code: string
  customer_country: string
  shipping_address_street_name_line1: string
  shipping_address_city: string
  shipping_address_zip_code: string
  shipping_address_country: string
}

export default async function (payload: CheckoutPayload, privateKey: string) {
  console.info('Creating checkout...')

  const checkoutEndpoint = 'https://api-sandbox.norbr.io/payment/checkout'

  try {
    const { data } = await axios({
      method: 'post',
      headers: { 'x-api-key': privateKey, version: '1.0.0' },
      url: checkoutEndpoint,
      data: payload,
    })

    console.info(data)
    return data

    //
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data)
      return error.response.data
    }
  }
}
