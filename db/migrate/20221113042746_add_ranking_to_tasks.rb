class AddRankingToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :ranking, :integer
  end
end
