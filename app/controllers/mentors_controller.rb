class MentorsController < ApplicationController

  def index
    mentor = Mentor.all
    render json: mentor.as_json
  end

  def create
    mentor = Mentor.create!(
      user_id: params[:user_id],
      user_name: params[:user_name],
      password_salt: params[:password_salt],
      title: params[:title],
      first_name: params[:first_name],
      middle_name: params[:middle_name],
      last_name: params[:last_name],
      suffix: params[:suffix],
      area_of_focus: params[:area_of_focus],
      profession: params[:profession],
      home_address: params[:home_address],
      home_city: params[:home_city],
      home_state: params[:home_state],
      home_postal_code: params[:home_postal_code],
      home_phone: params[:home_phone],
      mobile_phone: params[:mobile_phone],
      email_address: params[:email_address],
      birthdate: params[:birthdate],
      date_joined: params[:date_joined],
      regional_conf: params[:regional_conf],
      regional_conf_yr: params[:regional_conf_yr],
      regional_conf_state: params[:regional_conf_state],
      regional_conf_pending: params[:regional_conf_pending],
      national_conf: params[:national_conf],
      national_conf_yr: params[:national_conf_yr],
      national_conf_state: params[:national_conf_state],
      national_conf_pending: params[:national_conf_pending],
      active: params[:active],
      photo: params[:photo],
      additional_info: params[:additional_info],
      )
    mentor.save
    render json: mentor.as_json
  end
end