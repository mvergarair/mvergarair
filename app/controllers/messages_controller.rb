class MessagesController < ApplicationController

	def create
		message = Message.create message_params
		AdminMailer.send_message(message).deliver_now
		render json: {status: :ok} and return
	end


	private 
	def message_params
		params.require(:message).permit(:name , :email, :content)
	end
end
