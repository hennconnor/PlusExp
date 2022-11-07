class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :profile_pic
      t.integer :user_id
      t.integer :friend_id

      t.timestamps
    end
  end
end
