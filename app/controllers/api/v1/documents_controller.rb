class Api::V1::DocumentsController < ApiController

  def index
    tenant = current_user
    documents = tenant.documents
    render json: documents
  end

  def create
    binding.pry
    document = Document.new(
      title: params[:title],
      body: params[:body]
    )
    document.tenant = current_user
    if document.save
        render json: document
      else
        render json: {
          errors: document.errors.messages,
          fields: document
        }
      end
    end


end
