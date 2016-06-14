class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :option, index: true, foreign_key: true
    end
  end
end
