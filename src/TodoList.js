import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';
import { fetchTodos, removeTodo, makeDone, makeInProgress } from './actions';

import './TodoList.css';

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="todo-list" >
                {
                    this.props.todos.map((todo, index) => (
                        <Card className="todo" key={todo.id}>
                            <CardContent
                                className={todo.completed ? 'todo__content-done' : 'todo__content'}>
                                <Typography className={todo.completed ? 'cardcontent-done' : 'cardcontent'} color="textPrimary" gutterBottom>
                                    {todo.title}
                                </Typography>
                                <div className="types">
                                    <CancelOutlinedIcon className="remove" onClick={() => { this.props.removeTodo(todo) }} />
                                    <DonutLargeSharpIcon
                                        className={todo?.inProgress ? 'progress rotate' : 'progress'}
                                        onClick={() => { this.props.makeInProgress(todo) }} />
                                    <DoneSharpIcon className="done" onClick={() => { this.props.makeDone(todo) }} />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}


export default connect(mapStateToProps, { fetchTodos, removeTodo, makeDone, makeInProgress })(TodoList);
