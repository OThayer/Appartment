class Api::V1::RequestsController < ApiController

  def index
    user = current_user
    requests = user.requests
    render json: requests
  end

  def create
    request = Request.new(
      work_type: params[:work_type],
      description: params[:description],
      maintenance_pic: params[:maintenance_pic]
    )
    request.user = current_user
    if request.save
        render json: request
      else
        render json: {
          errors: request.errors.messages,
          fields: request
        }
      end
    end
  end
