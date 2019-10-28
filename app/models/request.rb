class Request < ApplicationRecord
  validates :description, presence: true
  validates :type, presence: true
end
