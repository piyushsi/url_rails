Rails.application.routes.draw do
  root "homepage#index"
  
  get '/:slug' => "links#redirectLink" 
  post "/api/v1/url", to: "links#createLink"
  
  get "*path", to: "homepage#index", via: :all
end
