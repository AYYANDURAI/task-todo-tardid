import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchTodos = () => {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get('/todos');
        console.log(response.data);
        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        });
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        payload: todo.id
    }
}

export const makeDone = (todo) => {
    return {
        type: 'MAKE_DONE',
        payload: todo.id
    }
}

export const makeInProgress = (todo) => {
    return {
        type: 'MAKE_IN_PROGRESS',
        payload: todo.id
    }
}