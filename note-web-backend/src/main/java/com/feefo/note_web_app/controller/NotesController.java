package com.feefo.note_web_app.controller;

import com.feefo.note_web_app.note.DataRegisterNote;
import com.feefo.note_web_app.note.DataUpdateNote;
import com.feefo.note_web_app.note.Note;
import com.feefo.note_web_app.note.NoteRepository;
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
public class NotesController {

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
