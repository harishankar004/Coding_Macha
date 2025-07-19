package com.example.Coding.Platofrm.services;

import com.example.Coding.Platofrm.model.Question;
import com.example.Coding.Platofrm.model.Room;
import com.example.Coding.Platofrm.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room createRoom(String createdByUsername, List<Question> questions, int timerInMinutes) {
        Room room = new Room();
        room.setCreatedByUsername(createdByUsername);
        room.setQuestions(questions);
        room.setTimerInMinutes(timerInMinutes);
        room.setRoomId(generateCustomRoomId(createdByUsername));

        return roomRepository.save(room);
    }



    private String generateCustomRoomId(String username) {
        // For example: user123-abc456
        return username + "-" + UUID.randomUUID().toString().substring(0, 6);
    }
}
