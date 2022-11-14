class Task < ApplicationRecord
    has_many :notes, dependent: :destroy
    belongs_to :user
    belongs_to :category

    validates :description, presence: true
    validates :xp_amount, presence: true
end
