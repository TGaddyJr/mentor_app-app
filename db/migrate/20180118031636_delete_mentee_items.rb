class DeleteMenteeItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :mentees, :password_salt, :string
    remove_column :mentees, :password_reset, :string
    remove_column :mentees, :integer, :string
    remove_column :mentees, :regional_conf_pending, :string
    remove_column :mentees, :national_conf_pending, :string
  end
end
