class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :surveys, :expiration, :bigint
  end
end
