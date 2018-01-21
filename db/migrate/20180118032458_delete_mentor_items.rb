class DeleteMentorItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :mentors, :password_salt, :string
    remove_column :mentors, :password_reset, :string
    remove_column :mentors, :integer, :string
    remove_column :mentors, :regional_conf_pending, :string
    remove_column :mentors, :national_conf_pending, :string

  end
end
