package com.feefo.note_web_app.note;

import jakarta.validation.constraints.NotBlank;

public record DataRegisterNote(Long id, @NotBlank String text) {
    public DataRegisterNote(Note note) {
        this(note.getId(),note.getText());
    }
}
