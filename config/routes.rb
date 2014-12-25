Rails.application.routes.draw do
  root              'static_pages#home'
  get 'about'    => 'static_pages#about'
  get 'gallery'  => 'static_pages#gallery'
  get 'contact'  => 'static_pages#contact'
end
