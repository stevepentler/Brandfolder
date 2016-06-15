class Option < ActiveRecord::Base
  belongs_to :survey
  has_many :votes, dependent: :destroy
end
