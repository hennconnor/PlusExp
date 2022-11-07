class Note < ApplicationRecord
  belongs_to :User
  belongs_to :Task

  validates :description, presence: true
end
