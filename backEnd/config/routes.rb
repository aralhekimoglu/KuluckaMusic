Rails.application.routes.draw do
  get 'v1/songs'
  get 'v1/channels'

  resources :songs 
  resources :channels 
  resources :components

  get 'songs/show' , :default => {format: :json}	
  post 'songs/create', :default => {format: :json}	
  get 'channels/show' , :default => {format: :json}	
  post 'channels/create', :default => {format: :json}	
  post 'channels/update', :default => {format: :json} 
  post 'songs/destroy', :default => {format: :json}

  match '(:controller(/:action(/:id)))', :via => :get 
  match '(:controller(/:action(/:id)))', :via => :post

end