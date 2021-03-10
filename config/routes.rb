Rails.application.routes.draw do
  root "homepage#index"
  get "/report", to: "homepage#index"
  get '/api/report', to: "links#index"
  get '/:slug' => "links#redirectLink" 
  post "/api/v1/url", to: "links#createLink"
  post "/api/v1/urlpin", to: "links#pinLink"
  
end
