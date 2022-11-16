class User < ApplicationRecord
    has_many :tasks
    has_many :categories, through: :tasks

    has_secure_password

    has_one_attached :avatar

    validates :name, 
        presence: true
    validates :username,
        presence: true,
        uniqueness: true
    validates :password,
        presence: true, on: :create

        
        

end
