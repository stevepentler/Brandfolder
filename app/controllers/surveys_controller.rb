class SurveysController < ApplicationController

  def index
    before_action :authorize
    @surveys = current_user.surveys
  end

  def show
    @params = params
  end

end