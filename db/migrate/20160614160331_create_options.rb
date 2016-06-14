class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.references :survey, index: true, foreign_key: true
      t.string :title
      t.integer :tally, default: 0
    end
  end
end
