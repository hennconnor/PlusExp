# app/controllers/application_controller.rb
class ApplicationController < ActionController::API

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

    private

    def not_found_response(exception)
        render json: {error: "#{exception.model} Not Found"}, status: :not_found
    end 

    def invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end