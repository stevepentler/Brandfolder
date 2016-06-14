class Api::V1::SurveysController < ApplicationController
  respond_to :json

  def index
    respond_with current_user.surveys.order(active: :desc)
  end

  def create
    create_survey_with_options(params)
    render json: "success"
  end

  # def survey_params
  #   params.require(:survey).permit(:surveyName, :surveyQuestion, :surveyExpiration, :surveyOptions)
  # end

end