class ChangeUserToLink < ActiveRecord::Migration[6.0]
  def change
    rename_table :users, :links
  end
end
