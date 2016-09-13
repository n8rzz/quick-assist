Rails.application.routes.draw do
  root 'static_pages#home'
  get 'bookkeeping-in-the-cloud', to: 'static_pages#bookkeeping_in_the_cloud' #, as: :bookkeeping_in_the_cloud
  get 'about', to: 'static_pages#about'
  get 'hiring', to: 'static_pages#hiring'
end
