class RequestSerializer < ActiveModel::Serializer
  attributes :description, :work_type, :user_id
end
