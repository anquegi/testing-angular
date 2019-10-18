class HelloAngularController < ApplicationController
  def index
  end

  
  def world
    name = params[:name] || 'world'
    render json: { name: name }
  end
end
