class MessagesController < ApplicationController

	def create
		Message.create message_params
		render json: {status: :ok} and return
	end


	private 
	def message_params
		params.require(:message).permit(:name , :email, :content)
	end
end
