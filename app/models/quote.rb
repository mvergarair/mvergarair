# == Schema Information
#
# Table name: quotes
#
#  id         :integer          not null, primary key
#  phrase     :string
#  author     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Quote < ActiveRecord::Base
end
