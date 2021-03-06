Rails.application.routes.draw do
  root 'homes#index'
  get '/requests', to: 'homes#index'
  get '/MaintenanceInfoPage', to: 'homes#index'
  get '/Payments', to: 'payments#new'
  get '/paymentsinfo', to: 'homes#index'
  get '/mydocuments', to: 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index ]
      resources :requests, only: [ :index, :create, :show ]
      resources :documents, only: [ :index, :create ]
    end
  end

  resources :payments
end
