class SurveysController < ApplicationController
  def index
    survey = Survey.all
    render json: survey.as_json
  end

  def create
    survey = Survey.create!(
    user_id: params[:user_id],
    initial: params[:initial],
    mid_term: params[:mid_term],
    end_of_term: params[:end_of_term],
    )
    survey.save
    render json: survey.as_json
  end
end
