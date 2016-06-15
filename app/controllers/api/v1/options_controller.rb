 class Api::V1::OptionsController < ApplicationController
  respond_to :json

  def show
    respond_with Survey.find(params[:id]).options.all
  end
end