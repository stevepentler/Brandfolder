class ChangeDateToString < ActiveRecord::Migration
  def change
    change_column :surveys, :expiration, :string
  end
end
