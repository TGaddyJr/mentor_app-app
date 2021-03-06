Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  post '/users' => 'users#create'
  
  get '/mentees' => 'mentees#index'
  get '/mentees/new' => 'mentees#new'
  post '/mentees' => 'mentees#create'
  get '/mentees/:id' => 'mentees#show'
  get '/mentees/:id/edit' => 'mentees#edit'
  patch '/mentees/:id' => 'mentees#update'
  delete '/mentees/:id' => 'mentees#destroy'

  get '/mentors' => 'mentors#index'
  get '/mentors/new' => 'mentors#new'
  post '/mentors' => 'mentors#create'
  get '/mentors/:id' => 'mentors#show'
  get '/mentors/:id/edit' => 'mentors#edit'
  patch '/mentors/:id' => 'mentors#update'
  delete '/mentors/:id' => 'mentors#destroy'

  get '/documents' => 'documents#index'
  get '/documents/new' => 'documents#new'
  post '/documents' => 'documents#create'
  get '/documents/:id' => 'documents#show'
  get '/documents/:id/edit' => 'documents#edit'
  patch '/documents/:id' => 'documents#update'
  delete '/documents/:id' => 'documents#destroy'

  get '/appointments' => 'appointments#index'
  get '/appointments/new' => 'appointments#new'
  post '/appointments' => 'appointments#create'
  get '/appointments/:id' => 'appointments#show'
  get '/appointments/:id/edit' => 'appointments#edit'
  patch '/appointments/:id' => 'appointments#update'
  delete '/appointments/:id' => 'appointments#destroy'

  get '/surveys' => 'surveys#index'
  get '/surveys/new' => 'surveys#new'
  post '/surveys' => 'surveys#create'
  get '/surveys/:id' => 'surveys#show'
  get '/surveys/:id/edit' => 'surveys#edit'
  patch '/surveys/:id' => 'surveys#update'
  delete '/surveys/:id' => 'surveys#destroy'
end
