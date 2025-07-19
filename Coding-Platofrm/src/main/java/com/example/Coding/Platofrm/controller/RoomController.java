package com.example.Coding.Platofrm.controller;

import com.example.Coding.Platofrm.model.Question;
import com.example.Coding.Platofrm.model.Room;
import com.example.Coding.Platofrm.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/create")
    public ResponseEntity<?> createRoom(
            @RequestParam String username,
            @RequestBody RoomRequest request
    ) {
        Room room = roomService.createRoom(username, request.getQuestions(), request.getTimerInMinutes());
        return ResponseEntity.ok(room);
    }

    public static class RoomRequest {
        private List<Question> questions;
        private int timerInMinutes;

        public List<Question> getQuestions() {
            return questions;
        }

        public void setQuestions(List<Question> questions) {
            this.questions = questions;
        }

        public int getTimerInMinutes() {
            return timerInMinutes;
        }

        public void setTimerInMinutes(int timerInMinutes) {
            this.timerInMinutes = timerInMinutes;
        }
    }

}
