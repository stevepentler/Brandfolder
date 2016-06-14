class CreateSurvey < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.references :user, index: true, foreign_key: true
      t.string :name
      t.boolean :active
      t.string :question
      t.integer :expiration
    end
  end
end
