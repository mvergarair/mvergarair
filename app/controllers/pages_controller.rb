class PagesController < ApplicationController

	def index
		@quote = Quote.find(rand(1..Quote.all.count))
	end

	def contact
		
	end

	def get_random_quote
		render json: Quote.find(rand(1..Quote.all.count))
	end
end
