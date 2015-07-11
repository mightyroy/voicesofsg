class CreateVoices < ActiveRecord::Migration
  def change
    create_table :voices do |t|
      t.string :text
      t.float :locationX
      t.float :locationY
      t.integer :votes
      t.timestamps null: false
    end
  end
end