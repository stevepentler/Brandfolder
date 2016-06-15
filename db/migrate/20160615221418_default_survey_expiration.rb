class DefaultSurveyExpiration < ActiveRecord::Migration
  def change
    change_column :surveys, :expiration, :string, :default => "2020-12-30"
  end
end
