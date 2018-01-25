class MenteesController < ApplicationController

  def index
    mentees = Mentee.all
    render json: mentees.as_json
  end

  def create
    mentee = Mentee.create!(
      user_name: params[:user_name],
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
      national_conf: params[:national_conf],
      national_conf_yr: params[:national_conf_yr],
      national_conf_state: params[:national_conf_state],
      active: params[:active],
      photo: params[:photo],
      additional_info: params[:additional_info],
      )
    mentee.save
    render json: mentee.as_json

  end
  
end
