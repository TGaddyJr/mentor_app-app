class CreateSurveys < ActiveRecord::Migration[5.1]
  def change
    create_table :surveys do |t|
      t.string :user_id
      t.string :initial
      t.string :mid_term
      t.string :end_of_term

      t.timestamps
    end
  end
end
