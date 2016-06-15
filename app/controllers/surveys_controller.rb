class SurveysController < ApplicationController
    before_action :authorize, only: [:index]

  def index
    @surveys = current_user.surveys
  end

  def show
    @params = params
  end

end