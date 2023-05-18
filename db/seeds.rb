puts "creating users..."
user1 = User.create!(username: "username1", password: "abc", name: "Connor", level: 1, xp: 0, profile_pic: 'https://cdn.vox-cdn.com/thumbor/lWOGzsPeAD6YzEVVNH001nrSqPM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24458108/captain_pikachu.jpg')
user2 = User.create!(username: "username2", password: "abc", name: "Matt", level: 1, xp: 0)

puts "creating categories..."
category1 = Category.create!(name: "Fitness")
category2 = Category.create!(name: "Household")
category3 = Category.create!(name: "Intellectual")
category4 = Category.create!(name: "Hygiene")
category5 = Category.create!(name: "Social")
category6 = Category.create!(name: "Professional")
category7 = Category.create!(name: "Other")

puts "creating tasks..."
task1 = Task.create!(description: "walk dog", xp_amount: 15, user_id: 1, category_id: 1, ranking: 1)
task2 = Task.create!(description: "finish project", xp_amount: 100, user_id: 1, category_id: 6, ranking: 0)
task3 = Task.create!(description: "dishes", xp_amount: 25, user_id: 1, category_id: 2, ranking: 2)
task4 = Task.create!(description: "test dont show", xp_amount: 25, user_id: 2, category_id: 7)

puts "creating notes..."

