class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :profile_pic, :friend_id
  has_many :tasks
end
