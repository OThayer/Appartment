class PaymentsController < ApplicationController

  respond_to :html, :json

  def new
    @payment = Payment.new
  end

  def create
    @payment = Payment.new()
    @payment.user = current_user
    @payment.save
    flash.now[:notice] = "Your Payment Was Successful!"
  end

end
