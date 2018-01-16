class AppointmentsController < ApplicationController
  def index
    appointment = Appointment.all
    render json: appointment.as_json
  end

  def create
    appointment = Appointment.create!(
    user_id: params[:user_id],
    year: params[:year],
    month: params[:month],
    day: params[:day],
    date: params[:date],
    time: params[:time],
    notes: params[:notes],
)
    appointment.save
    render json: appointment.as_json
  end
end
