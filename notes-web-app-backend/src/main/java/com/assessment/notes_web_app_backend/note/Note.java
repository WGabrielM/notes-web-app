package com.assessment.notes_web_app_backend.note;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Table(name = "notes")
@Entity(name = "Note")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;

    public Note(DataRegisterNote data) {
        this.text = data.text();
    }

    public void updateInformation(DataUpdateNote data) {
        if(data.text() != null) {
            this.text = data.text();
        }
    }
}
