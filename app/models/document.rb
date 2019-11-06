class Document < ApplicationRecord
  belongs_to :tenant, class_name: 'User', foreign_key: :tenant_id
  belongs_to :landlord, class_name: 'User', foreign_key: :landlord_id
  has_many :users
end
