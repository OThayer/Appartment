class Request < ApplicationRecord

  mount_uploader :maintenance_pic, MaintenancePicUploader

  validates :description, presence: true
  validates :work_type, presence: true

  belongs_to :user
end
