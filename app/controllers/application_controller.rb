class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user,
                :authorize,
                :create_survey_with_options

  def current_user
    @user = User.find(session[:user_id]) if session[:user_id]
  end

  def authorize
    unless current_user
      redirect_to root_path
      flash[:error] = "Please login first"
    end
  end

  def create_survey_with_options(params)
    survey_params = params["survey"]
    @survey = Survey.create(user_id: current_user.id,
                            name: survey_params["surveyName"],
                            question: survey_params["surveyQuestion"],
                            expiration: survey_params["surveyExpiration"])
    survey_params["surveyOptions"].each do |option|
      @option = Option.create(survey_id: @survey.id,
                              title: option)
    end
  end
end
