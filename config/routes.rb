Rails.application.routes.draw do
  root to: "sessions#new"

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users, only: [:new, :create]
  resources :surveys, only: [:index, :show]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :surveys, only: [:index, :show, :create, :update, :destroy]
      resources :votes, only: [:create]
    end
  end
end
