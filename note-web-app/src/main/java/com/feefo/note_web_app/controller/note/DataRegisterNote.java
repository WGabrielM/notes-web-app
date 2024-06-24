package com.feefo.note_web_app.controller.note;

public record DataRegisterNote(String text) {
    public DataRegisterNote(Note note) {
        this(note.getText());
    }
}
