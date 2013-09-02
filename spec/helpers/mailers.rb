module MailerHelpers

  def current_email_delivery_count
    ActionMailer::Base.deliveries.length
  end

end
