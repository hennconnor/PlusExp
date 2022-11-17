class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :level, :xp, :profile_pic
  has_many :tasks
end
