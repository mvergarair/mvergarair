Rails.application.routes.draw do

	root to: 'pages#index' 

	get 'random_quote', to: 'pages#random_quote',  as: :random_quote
	resource :messages, only: :create

end
