class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :xp_amount
      t.string :category

      t.timestamps
    end
  end
end
