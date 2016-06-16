class Api::V1::SurveysController < ApplicationController
  respond_to :json
  before_action :set_survey, only: [:show, :update, :destroy]

  def index
    respond_with current_user.surveys.order(active: :desc)
  end

  def show
    options = @survey.options
    votes = count_votes(options)
    data = {survey: @survey, options: options, votes: votes}
    respond_with data
  end

  def create
    create_survey_with_options(params)
    render json: "success"
  end

  def update
    @survey.update_attributes(active: false);
    render json: "sucess"
  end

  def destroy
    @survey.destroy
    render json: "success"
  end

  private

  def count_votes(options)
    options.map do |option|
      option.votes.count
    end
  end

  def set_survey
    @survey = Survey.find(params[:id])
  end

end