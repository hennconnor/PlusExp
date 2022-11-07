class NoteSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_one :User
  has_one :Task
end
