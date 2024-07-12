package com.assessment.notes_web_app_backend.controller;

import com.assessment.notes_web_app_backend.note.DataRegisterNote;
import com.assessment.notes_web_app_backend.note.DataUpdateNote;
import com.assessment.notes_web_app_backend.note.Note;
import com.assessment.notes_web_app_backend.note.NoteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

class NoteControllerTest {

    @InjectMocks
    private NoteController noteController;

    @Mock
    private NoteRepository noteRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegisterNote() {
        DataRegisterNote data = new DataRegisterNote(null, "Test note content");

        Note note = new Note();
        note.setId(1L);
        note.setText("Test note content");

        when(noteRepository.save(any(Note.class))).thenReturn(note);

        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString("http://localhost");
        ResponseEntity response = noteController.registerNote(data, uriBuilder);

        assertEquals(201, response.getStatusCodeValue());
        assertNotNull(response.getBody());

        String location = response.getHeaders().getLocation().toString();
        assertTrue(location.contains("/notes/1"));
    }

    @Test
    void testListNotes() {
        List<Note> notes = new ArrayList<>();
        notes.add(new Note());
        when(noteRepository.findAll()).thenReturn(notes);

        ResponseEntity<List<DataRegisterNote>> response = noteController.listNotes();

        assertEquals(200, response.getStatusCodeValue());
        assertNotNull(response.getBody());
        assertEquals(1, response.getBody().size());
    }

    @Test
    void testDeleteNote() {
        doNothing().when(noteRepository).deleteById(anyLong());

        ResponseEntity<?> response = noteController.deleteNote(1L);

        assertEquals(204, response.getStatusCodeValue());
        verify(noteRepository, times(1)).deleteById(1L);
    }
}
