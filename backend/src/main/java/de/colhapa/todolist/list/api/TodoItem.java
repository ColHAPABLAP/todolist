package de.colhapa.todolist.list.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TodoItem {

    private String name;
    private boolean done;
}
