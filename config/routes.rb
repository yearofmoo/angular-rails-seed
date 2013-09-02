AngularRailsApp::Application.routes.draw do

  #
  # API Area
  #
  namespace :api, defaults: {format: 'json'}  do
    namespace :v1 do
    end
  end

  #
  # WWW Area
  #
  root :to => 'home#index'
  get '/' => 'home#index', :as => :home
  get '*path' => 'home#index'

end
