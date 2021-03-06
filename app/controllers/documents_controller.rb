class DocumentsController < ApplicationController

  def index
    # document = Document.all
    # render json: document.as_json
    Prawn::Document.generate("hello2.pdf") do
      text "Hello World Again!"
    end
    render json: {}
  end

  def create
    document = Document.create!(
    user_id: params[:user_id],
    mentorship_self_eval: params[:mentorship_self_eval],
    mentoring_partner_agreement: params[:mentoring_partner_agreement],
    confidentiality_sheet: params[:confidentiality_sheet],
    smart_goal_sheet: params[:smart_goal_sheet],
    mentoring_workplan: params[:mentoring_workplan],
)
    document.save
    render json: document.as_json

  end
end
