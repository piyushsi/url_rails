class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :url
      t.string :slug
      t.integer :clicked
      t.boolean :pinned
    end
  end
end
