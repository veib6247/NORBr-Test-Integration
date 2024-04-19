export const myPaymentMethods = {
  payment_methods_available: [
    {
      name: 'visa',
      component_type: 'card',
      required_fields: ['token', 'amount', 'currency'],
      form_fields: [
        {
          name: 'card_number',
          display_name: 'card_number',
          data_type: 'integer',
          enum: '',
          example: '4242 xxxx xxxx xxxx',
        },
        {
          name: 'cvc',
          display_name: 'cvc',
          data_type: 'integer',
          enum: '',
          example: '123',
        },
      ],
      countries: ['all'],
      logo: 'assets/visa.svg',
    },
    {
      name: 'mastercard',
      component_type: 'card',
      required_fields: ['token', 'amount', 'currency'],
      form_fields: [
        {
          name: 'card_number',
          display_name: 'card_number',
          data_type: 'integer',
          enum: '',
          example: '5436 xxxx xxxx xxxx',
        },
        {
          name: 'cvc',
          display_name: 'cvc',
          data_type: 'integer',
          enum: '',
          example: '123',
        },
      ],
      countries: ['all'],
      logo: '',
    },
  ],
}
