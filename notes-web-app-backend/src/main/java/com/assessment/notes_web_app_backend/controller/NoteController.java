package com.assessment.notes_web_app_backend.controller;

import com.assessment.notes_web_app_backend.note.DataRegisterNote;
import com.assessment.notes_web_app_backend.note.DataUpdateNote;
import com.assessment.notes_web_app_backend.note.Note;
import com.assessment.notes_web_app_backend.note.NoteRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controller for managing notes.
 */
@RestController
@RequestMapping("notes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    /**
     * Registers a new note.
     *
     * @param dataRegisterNote the note data to be registered
     * @param uriBuilder the URI builder
     * @return the response entity containing the created note
     */
    @PostMapping
    @Transactional
    public ResponseEntity registerNote(@RequestBody @Valid DataRegisterNote dataRegisterNote, UriComponentsBuilder uriBuilder) {
        var note = new Note(dataRegisterNote);
        noteRepository.save(note);

        var uri = uriBuilder.path("/notes/{id}").buildAndExpand(note.getId()).toUri();

        return ResponseEntity.created(uri).body(new DataRegisterNote(note));
    }

    /**
     * Lists all notes.
     *
     * @return the response entity containing the list of notes
     */
    @GetMapping
    public ResponseEntity<List<DataRegisterNote>> listNotes() {
        var notes = noteRepository.findAll().stream()
                .map(DataRegisterNote::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(notes);
    }

    /**
     * Updates a note.
     *
     * @param dataUpdateNote the note data to be updated
     * @return the response entity containing the updated note
     */
    @PutMapping
    @Transactional
    public ResponseEntity updateNote(@RequestBody @Valid DataUpdateNote dataUpdateNote){
        var note = noteRepository.getReferenceById(dataUpdateNote.id());
        note.updateInformation(dataUpdateNote);
        return ResponseEntity.ok(new DataRegisterNote(note));
    }

    /**
     * Deletes a note.
     *
     * @param id the ID of the note to be deleted
     * @return the response entity
     */
    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}