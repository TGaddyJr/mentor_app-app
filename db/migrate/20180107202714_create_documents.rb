class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :documents do |t|
      t.string :user_id
      t.string :mentorship_self_eval
      t.string :mentoring_partner_agreement
      t.string :confidentiality_sheet
      t.string :smart_goal_sheet
      t.string :mentoring_workplan

      t.timestamps
    end
  end
end
