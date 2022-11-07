Rails.application.routes.draw do
  resources :notes
  resources :tasks
  resources :users

  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'


end
