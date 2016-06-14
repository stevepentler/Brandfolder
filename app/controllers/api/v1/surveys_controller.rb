class Api::V1::SurveysController < ApplicationController
  respond_to :json
  def index
    respond_with current_user.surveys
  end
end