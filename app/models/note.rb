class Note < ApplicationRecord
  belongs_to :User
  belongs_to :Task
end
