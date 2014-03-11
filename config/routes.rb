SampleApp::Application.routes.draw do
  root to: 'samples#index'
  resources :samples
end
