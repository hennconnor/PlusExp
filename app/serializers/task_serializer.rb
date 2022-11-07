class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :xp_amount, :category
end
