class CreateContactRequests < ActiveRecord::Migration
  def change
    create_table :contact_requests do |t|
      t.string :first_name, :limit => 100
      t.string :last_name, :limit => 100
      t.string :email, :limit => 100
      t.text :message
      t.text :recommendations
      t.string :ip_address, :limit => 15
      t.timestamps
    end
  end
end
