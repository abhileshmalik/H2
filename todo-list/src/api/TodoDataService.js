import axios from 'axios';


class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get('http://localhost:8000/todos')
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8000/todos/${id}`)
    }

    completeTodo(name, id) {
        return axios.patch(`http://localhost:8000/todos/${id}`)
    }
        
}

export default new TodoDataService()