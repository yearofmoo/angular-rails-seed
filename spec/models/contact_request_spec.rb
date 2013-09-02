require 'spec_helper'

describe ContactRequest do

  it "should send two emails when created" do
    count = current_email_delivery_count()
    @contact = FactoryGirl.create(:contact_request)
    current_email_delivery_count() == count + 2
  end

end
