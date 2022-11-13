class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :xp_amount, :category_id, :user_id, :ranking

  belongs_to :user
end
