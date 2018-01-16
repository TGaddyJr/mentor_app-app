Rails.application.routes.draw do

  get '/mentees' => 'mentees#index'
  post '/mentees' => 'mentees#create'
  get '/mentees/:id' => 'mentees#show'
  patch '/mentees/:id' => 'mentees#update'
  delete '/mentees/:id' => 'mentees#destroy'

  get '/mentors' => 'mentors#index'
  post '/mentors' => 'mentors#create'
  get '/mentors/:id' => 'mentors#show'
  patch '/mentors/:id' => 'mentors#update'
  delete '/mentors/:id' => 'mentors#destroy'

  get '/documents' => 'documents#index'
  post '/documents' => 'documents#create'
  get '/documents/:id' => 'documents#show'
  patch '/documents/:id' => 'documents#update'
  delete '/documents/:id' => 'documents#destroy'

  get '/appointments' => 'appointments#index'
  post '/appointments' => 'appointments#create'
  get '/appointments/:id' => 'appointments#show'
  patch '/appointments/:id' => 'appointments#update'
  delete '/appointments/:id' => 'appointments#destroy'

  get '/surveys' => 'surveys#index'
  post '/surveys' => 'surveys#create'
  get '/surveys/:id' => 'surveys#show'
  patch '/surveys/:id' => 'surveys#update'
  delete '/surveys/:id' => 'surveys#destroy'


end
