class PagesController < ApplicationController

	protect_from_forgery

	def index
		@quote = Quote.find(rand(1..Quote.all.count))
		@message = Message.new
	end

	def send_message
	end


	def random_quote
		render json: Quote.find(rand(1..Quote.all.count))
	end
end
