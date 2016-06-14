class Option < ActiveRecord::Base
  belongs_to :survey
  has_many :votes
end
