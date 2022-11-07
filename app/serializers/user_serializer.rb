class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :profile_pic, :user_id, :friend_id
end
