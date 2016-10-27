Rails.application.routes.draw do
  root 'static_pages#home'
  get 'services', to: 'static_pages#services'
  get 'get-started', to: 'static_pages#get_started'
  get 'about', to: 'static_pages#about'
  get 'hiring', to: 'static_pages#hiring'
  get 'testimonials', to: 'static_pages#testimonials'
end
