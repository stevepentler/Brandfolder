class Api::V1::VotesController < ApplicationController
  respond_to :json

  def create
    Vote.create(option_id: params[:optionId])
    render json: "success"
  end

end