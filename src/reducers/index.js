
const initialState = {
    todos: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'FETCH_TODOS':
            return { ...state, todos: action.payload };
        case 'REMOVE_TODO':
            return { todos: [...state.todos.filter(todo => todo.id !== action.payload)] }
        case 'MAKE_DONE':
            return {
                todos: [...state.todos.map(item => {
                    if (item.id === action.payload) {
                        item.completed = !item.completed;
                    }
                    return item;
                })]
            };
        case 'MAKE_IN_PROGRESS':
            return {
                todos: [...state.todos.map(item => {
                    if (item.id === action.payload) {
                        if (item.inProgress) {
                            item.inProgress = !item.inProgress;
                        } else {
                            item.inProgress = true;
                        }
                    }
                    return item;
                })]
            };
        default:
            return state;
    }
}

export default reducers;