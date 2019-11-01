class PaymentsController < ApplicationController

  respond_to :html, :json

  def new
    @payment = Payment.new
  end

  def create
    @payment = Payment.new(payment_params)
    @payment.user = current_user
    @payment.save
    respond_with(@payment)
  end

  private
  def payment_params
    params.require(:payment).permit(:description, :name, :permalink, :price)
  end


end
