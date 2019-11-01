class Payment < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true

  belongs_to :user
end
