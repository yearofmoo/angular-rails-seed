AngularRailsApp::Application.routes.draw do

  #
  # Admin Area
  #
  devise_for :admins
  mount RailsAdmin::Engine => '/manage', :as => 'rails_admin'

  #
  # API Area
  #
  namespace :api, defaults: {format: 'json'}  do
    namespace :v1 do
      resource :contact, :controller => :contact
      resources :articles
    end
  end

  #
  # WWW Area
  #
  root :to => 'home#index'
  get '/' => 'home#index', :as => :home
  get '*path' => 'home#index'

end
