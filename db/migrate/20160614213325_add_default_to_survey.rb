class AddDefaultToSurvey < ActiveRecord::Migration
  def change
    change_column :surveys, :active, :boolean, default: true
  end
end
