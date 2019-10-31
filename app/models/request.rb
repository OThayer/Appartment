class Request < ApplicationRecord
  validates :description, presence: true
  validates :work_type, presence: true

  belongs_to :user
end
