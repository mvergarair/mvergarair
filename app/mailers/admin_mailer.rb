class AdminMailer < ApplicationMailer

	def send_message(message)
		@message = message
		mail(to: 'mvergarair@gmail.com', subject: "New message from #{@message.name}")
	end
end
