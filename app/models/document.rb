class Document < ApplicationRecord

  mount_uploader :body, BodyUploader
  belongs_to :tenant, class_name: 'User', foreign_key: :tenant_id
  belongs_to :landlord, class_name: 'User', foreign_key: :landlord_id, optional: true
  has_many :users
end
