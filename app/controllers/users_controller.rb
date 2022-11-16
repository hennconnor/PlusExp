class UsersController < ApplicationController
  
  def show
    user = User.find_by(id: session[:user_id])
    render json: user, include: ['tasks', 'tasks.category']
  end
  
  def create 
    user = User.create!(user_params)
      render json: user, status: :created
  end
  
  def update
    user = User.find_by(id: session[:user_id])
    user.update!(user_params)
    render json: user, include: ['tasks', 'tasks.category']
  end

  def delete
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end
  
  
  private
  
  def user_params
    params.permit(:id, :username, :password, :name, :avatar, :xp, :level)
  end
  
  end