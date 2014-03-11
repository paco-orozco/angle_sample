SampleApp::Application.routes.draw do
  root to: 'samples#index'

  # pretty template
  # get "/samples/pretty_template" to: "samples#pretty_template"

  resources :samples
end
