package de.studytrade.studytradebackend.service;

import de.studytrade.studytradebackend.model.User;
import java.util.List;
import java.util.Optional;

public interface UserInterface {
    List<User> allUsers();
    void addUser(User user);
    Optional<User> singleUser(int userId);
    void deleteUser(int userId);
}
