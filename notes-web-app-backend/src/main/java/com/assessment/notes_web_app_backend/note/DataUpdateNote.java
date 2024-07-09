package com.assessment.notes_web_app_backend.note;

import jakarta.validation.constraints.NotNull;

public record DataUpdateNote(@NotNull Long id, String text) {
}
