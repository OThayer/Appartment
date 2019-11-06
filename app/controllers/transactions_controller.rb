class TransactionsController < ApplicationController
    only: [:new, :create]

  def new
    @payment = Payment.find_by!(
      permalink: params[:permalink]
    )
  end

  def create
    payment = Payment.find_by!(
      permalink: params[:permalink]
    )

    token = params[:stripeToken]

    begin
      charge = Stripe::Charge.create(
        amount:      payment.price,
        currency:    "usd",
        source:      token,
        description: params[:stripeEmail]
      )
      @sale = payment.sales.create!(
        email:      params[:stripeEmail],
        stripe_id:  charge.id
      )

    rescue Stripe::CardError => e
      # The card has been declined or
      # some other error has occurred
      @error = e
      render :new
    end
  end
