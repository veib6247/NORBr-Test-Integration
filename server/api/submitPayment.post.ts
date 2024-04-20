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
    customer_email: body.customerEmail,
    customer_first_name: body.customerFirstName,
    customer_last_name: body.customerLastName,
    customer_street_name: body.customerStreetName,
    customer_city: body.customerAddressCity,
    customer_zip_code: body.customerAddressZipCode,
    customer_country: body.customerAddressCountry,
    shipping_address_street_name_line1: body.shippingAddressStreetNameLine1,
    shipping_address_city: body.shippingAddressCity,
    shipping_address_zip_code: body.shippingAddressZipCode,
    shipping_address_country: body.shippingAddressCountry,
  })

  if (checkoutData.result.code == '011111') {
    // if checkout id is generated,
    // submit order with token id
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
