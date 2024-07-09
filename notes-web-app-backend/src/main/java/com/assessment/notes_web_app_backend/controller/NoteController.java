package com.assessment.notes_web_app_backend.controller;

import com.assessment.notes_web_app_backend.note.DataRegisterNote;
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

@RestController
@RequestMapping("notes")
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
    public ResponseEntity<Page<DataRegisterNote>> listNotes(@PageableDefault() Pageable pagination) {
        var list = noteRepository.findAll(pagination).map(DataRegisterNote::new);
        return ResponseEntity.ok(list);
    }
}