class User < ApplicationRecord
    has_many :notes
    has_many :tasks, through: :notes

    has_secure_password

    validates :name, 
        presence: true
    validates :username,
        presence: true,
        uniqueness: true
    validates :password,
        presence: true

end
