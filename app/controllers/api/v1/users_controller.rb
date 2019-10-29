class Api::V1::UsersController < ApplicationController

  def index
    render json: User.find(current_user.id)
  end
end
