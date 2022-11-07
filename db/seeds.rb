puts "creating users..."
user1 = User.create(username: "username1", password_digest: "abc", name: "Connor")
user2 = User.create(username: "username2", password_digest: "abc", name: "Matt")

puts "creating tasks..."
task1 = Task.create(description: "walk dog", xp_amount: 15)
task2 = Task.create(description: "finish project", xp_amount: 100)

puts "creating notes..."