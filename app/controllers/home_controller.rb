class HomeController < ApplicationController

  def index
    render :template => 'shared/empty', :layout => 'spa'
  end

end
