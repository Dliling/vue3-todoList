import {
    createStore
} from 'vuex'

let id = ''

function generateId() {
    return id++
}

const createTodoItem = (content) => {
    return {
        id: generateId(),
        content,
        done: false
    }
}

// Create a new store instance.
const store = createStore({
    state() {
        return {
            todos: []
        }
    },
    mutations: {
        addTodo(state, {
            content
        }) {
            state.todos.push(createTodoItem(content))
        },
        removeTodo(state, {
            id
        }) {
            state.todos = state.todos.filter(item => item.id !== id)
        },
        finishTodo(state, {
            id
        }) {
            state.todos.forEach(item => {
                if (item.id === id) {
                    item.done = true
                }
            })
        }
    }
})

export default store