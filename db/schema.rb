# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180107205251) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "user_id"
    t.string "month"
    t.string "day"
    t.string "date"
    t.string "integer"
    t.string "time"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", force: :cascade do |t|
    t.string "user_id"
    t.string "mentorship_self_eval"
    t.string "mentoring_partner_agreement"
    t.string "confidentiality_sheet"
    t.string "smart_goal_sheet"
    t.string "mentoring_workplan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mentees", force: :cascade do |t|
    t.string "user_id"
    t.string "user_name"
    t.string "password_salt"
    t.string "password_digest"
    t.string "password_reset"
    t.string "title"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "suffix"
    t.string "area_of_focus"
    t.string "profession"
    t.string "home_address"
    t.string "home_city"
    t.string "home_state"
    t.string "home_postal_code"
    t.string "home_phone"
    t.string "mobile_phone"
    t.string "email_address"
    t.string "birthdate"
    t.string "integer"
    t.string "date_joined"
    t.string "regional_conf"
    t.string "regional_conf_yr"
    t.string "regional_conf_state"
    t.string "regional_conf_pending"
    t.string "national_conf"
    t.string "national_conf_yr"
    t.string "national_conf_state"
    t.string "national_conf_pending"
    t.string "active"
    t.string "photo"
    t.string "addtional_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mentors", force: :cascade do |t|
    t.string "user_id"
    t.string "user_name"
    t.string "password_salt"
    t.string "password_digest"
    t.string "password_reset"
    t.string "title"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "suffix"
    t.string "area_of_focus"
    t.string "profession"
    t.string "home_address"
    t.string "home_city"
    t.string "home_state"
    t.string "home_postal_code"
    t.string "home_phone"
    t.string "mobile_phone"
    t.string "email_address"
    t.string "birthdate"
    t.string "integer"
    t.string "date_joined"
    t.string "regional_conf"
    t.string "regional_conf_yr"
    t.string "regional_conf_state"
    t.string "regional_conf_pending"
    t.string "national_conf"
    t.string "national_conf_yr"
    t.string "national_conf_state"
    t.string "national_conf_pending"
    t.string "active"
    t.string "photo"
    t.string "addtional_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "surveys", force: :cascade do |t|
    t.string "user_id"
    t.string "initial"
    t.string "mid_term"
    t.string "end_of_term"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
