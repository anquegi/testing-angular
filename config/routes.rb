Rails.application.routes.draw do

  root 'hello_angular#index'
  get 'hello_angular/index'
  get 'hello_angular/world'
end
