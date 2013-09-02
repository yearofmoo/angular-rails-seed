require 'spec_helper'

describe Api::V1::ContactController do
  integrate_views

  context "CREATE" do

    it "should create a new contact request" do
      post :create, contact: FactoryGirl.attributes_for(:contact_request), format: :json
      response.should be_success

      data = JSON::parse(response.body)
      data['id'].should be > 0
    end

    it "should not create a contact request if invalid data is provided" do
      form = FactoryGirl.attributes_for(:contact_request)
      form.delete(:first_name)

      post :create, contact: form, format: :json 
      response.should_not be_success
    end

  end

end
