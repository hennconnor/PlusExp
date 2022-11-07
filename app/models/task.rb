class Task < ApplicationRecord
    has_many :notes
    has_many :users, through: :notes

    validates :description, presence: true
    validates :xp_amount, presence: true
end
