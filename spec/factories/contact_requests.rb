# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :contact_request do
    first_name "First Name"
    last_name "Last Name"
    email "email@emai.com"
    message "abc"
    ip_address "127.0.0.1"
  end
end
