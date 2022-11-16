class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :level, :xp
  has_many :tasks
end
