class SurveysController < ApplicationController

  before_action :authorize
  def index
    @surveys = current_user.surveys
  end

  def show
    @params = params
  end

end