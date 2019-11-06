require 'stripe'
Stripe.api_key = ENV["STRIPE_SECRET"]

Stripe::Checkout::Session.create({
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
  payment_method_types: ['card'],
  line_items: [
    {
      name: 'Rental Payment',
      description: 'Monthly Rental Payment',
      amount: 1,
      currency: 'usd',
      quantity: 1,
    },
  ],
})
