50.times do 
  mentee = Mentee.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email_address: Faker::Internet.email, home_phone: Faker::PhoneNumber.phone_number)
  mentee.save
end

25.times do 
  mentor = Mentor.new(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email_address: Faker::Internet.email, home_phone: Faker::PhoneNumber.phone_number)
  mentor.save
end