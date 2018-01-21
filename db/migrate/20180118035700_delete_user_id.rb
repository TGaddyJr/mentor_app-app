class DeleteUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :mentees, :user_id, :string
    remove_column :mentors, :user_id, :string
  end
end
