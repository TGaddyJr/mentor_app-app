class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :user_id
      t.string :month
      t.string :day
      t.string :date
      t.string :integer
      t.string :time
      t.string :integer
      t.string :notes

      t.timestamps
    end
  end
end
