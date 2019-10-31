class Api::V1::UsersController < ApiController

  def index
    render json: User.find(current_user.id)
  end
end
