class Task < ApplicationRecord
    has_many :notes
    belongs_to :user
    belongs_to :category

    validates :description, presence: true
    validates :xp_amount, presence: true
end
