class Api::V1::RequestsController < ApiController

  def index
    render json: Request.all
  end

  def create
    new_request = Request.new(request_params)
    new_request.user = current_user
    if new_request.save
      render json: new_request
    else
      render json: {'errors': new_request.errors.full_messages}
    end
  end

  private

  def request_params
    params.require(:request).permit(:work_type, :description)
  end

end
