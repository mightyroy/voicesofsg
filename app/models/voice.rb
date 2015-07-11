class Voice < ActiveRecord::Base

  validates :text, length: {minimum:5 , maximum:100}
end
