import React, {Component} from 'react';

class TodoList extends Component {

    constructor() {
        super();

        this.state = {
            listItems: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/list')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    listItems: json
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                TodoList
                <ul id="todoList">
                    {this.state.listItems.map(item =>
                        <li key={item.name}>{item.name} {item.done.toString()}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TodoList;