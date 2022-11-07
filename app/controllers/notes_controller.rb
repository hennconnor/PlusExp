class NotesController < ApplicationController
    def show
        note = Note.find_by(id: params[:id])
        render json: note
    end

    def create
        note = Note.create(note_params)
        render json: note, status: :created
    end

    def delete
        note = Note.find_by(id: params[:id])
        note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:description)
    end
end
