class Api::V1::RequestsController < ApplicationController

  def index
    render json: Request.all
  end

  
end
