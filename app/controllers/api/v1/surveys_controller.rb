class Api::V1::SurveysController < ApplicationController
  respond_to :json

  def index
    respond_with current_user.surveys
  end

  def create
    create_survey_with_options(params)
    render json: "success"
  end

end