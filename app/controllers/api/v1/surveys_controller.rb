class Api::V1::SurveysController < ApplicationController
  respond_to :json

  def index
    respond_with current_user.surveys.order(active: :desc)
  end

  def show
    survey = Survey.find(params[:id])
    options = survey.options
    votes = count_votes(options)
    data = {survey: survey, options: options, votes: votes}
    respond_with data
  end

  def create
    create_survey_with_options(params)
    render json: "success"
  end

  def update
    survey = Survey.find(params[:id])
    survey.update_attributes(active: false);
    render json: "sucess"
  end

  def destroy
    survey = Survey.find(params[:id])
    survey.destroy
    render json: "success"
  end

  private

  def count_votes(options)
    options.map do |option|
      option.votes.count
    end
  end

  # def survey_params
  #   params.require(:survey).permit(:surveyName, :surveyQuestion, :surveyExpiration, :surveyOptions)
  # end

end