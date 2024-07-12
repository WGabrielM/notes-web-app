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

@RestController
@RequestMapping("notes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping
    @Transactional
    public ResponseEntity registerNote(@RequestBody @Valid DataRegisterNote data, UriComponentsBuilder uriBuilder) {
        var note = new Note(data);
        noteRepository.save(note);

        var uri = uriBuilder.path("/notes/{id}").buildAndExpand(note.getId()).toUri();

        return ResponseEntity.created(uri).body(new DataRegisterNote(note));
    }

    @GetMapping
    public ResponseEntity<List<DataRegisterNote>> listNotes() {
        var notes = noteRepository.findAll().stream()
                .map(DataRegisterNote::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(notes);
    }


    @PutMapping
    @Transactional
    public ResponseEntity updateNote(@RequestBody @Valid DataUpdateNote data){
        var note = noteRepository.getReferenceById(data.id());
        note.updateInformation(data);
        return ResponseEntity.ok(new DataRegisterNote(note));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}