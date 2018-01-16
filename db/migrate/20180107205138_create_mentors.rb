class CreateMentors < ActiveRecord::Migration[5.1]
  def change
    create_table :mentors do |t|
      t.string :user_id
      t.string :user_name
      t.string :password_salt
      t.string :password_digest
      t.string :password_reset
      t.string :title
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :suffix
      t.string :area_of_focus
      t.string :profession
      t.string :home_address
      t.string :home_city
      t.string :home_state
      t.string :home_postal_code
      t.string :home_phone
      t.string :mobile_phone
      t.string :email_address
      t.string :birthdate
      t.string :integer
      t.string :date_joined
      t.string :integer
      t.string :regional_conf
      t.string :regional_conf_yr
      t.string :integer
      t.string :regional_conf_state
      t.string :regional_conf_pending
      t.string :national_conf
      t.string :national_conf_yr
      t.string :integer
      t.string :national_conf_state
      t.string :national_conf_pending
      t.string :active
      t.string :photo
      t.string :addtional_info

      t.timestamps
    end
  end
end
