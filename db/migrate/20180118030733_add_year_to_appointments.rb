class AddYearToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :year, :integer
  end
end
