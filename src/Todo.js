import React from 'react';
import './Todo.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TodoList from './TodoList';

function Todo() {
    return (
        <div className="todo">
            <Card className="todo__card">
                <CardContent className="todo__container">
                    <TodoList />
                </CardContent>
            </Card>
        </div >
    )
}

export default Todo;
