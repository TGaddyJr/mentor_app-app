class UpdateMenteeAdditionalInfo < ActiveRecord::Migration[5.1]
  def change
    rename_column :mentees, :addtional_info, :additional_info
    rename_column :mentors, :addtional_info, :additional_info

  end
end
