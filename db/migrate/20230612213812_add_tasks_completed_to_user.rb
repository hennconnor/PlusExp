class AddTasksCompletedToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :tasks_completed, :integer
  end
end
