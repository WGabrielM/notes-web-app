package com.feefo.note_web_app.controller.note;

import jakarta.validation.constraints.NotNull;

public record DataUpdateNote(@NotNull Long id, String text) {
}
