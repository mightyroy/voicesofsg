class CreateVoices < ActiveRecord::Migration
  def change
    create_table :voices do |t|
      t.string :text
      t.float :locationX
      t.float :locationY
      t.integer :emotion
      t.datetime :time
      t.timestamps null: false
    end
  end
end