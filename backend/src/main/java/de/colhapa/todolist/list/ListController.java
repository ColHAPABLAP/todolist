package de.colhapa.todolist.list;

import de.colhapa.todolist.list.api.TodoItem;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/list", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class ListController {

    @RequestMapping(method = RequestMethod.GET)
    public List<TodoItem> getItems() {
        return createDefaultList();
    }

    private List<TodoItem> createDefaultList() {
        List<TodoItem> items = new ArrayList<>();
        TodoItem item1 = new TodoItem("FirstItem", true);
        TodoItem item2 = new TodoItem("SecondItem", false);
        items.add(item1);
        items.add(item2);
        return items;
    }
}
