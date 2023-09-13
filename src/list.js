import Todo from "./todo";
import storageManager from "./storage-manager";
class List{
    constructor(name, description, todos, isPersistent){
        this.name = name;
        this.description = description;
        this.todos = todos;
        this.isPersistent = isPersistent;
        this.id = null;
    }
    addTodo(title, description, dueDate, priority, isDone){
        let todo = new Todo(title, description, dueDate, priority, isDone);
        todo.id = this.todos.length;
        this.todos.push(todo);
        storageManager.storeProjects();
    }
    removeTodo(id){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos.splice(index,1);
        storageManager.storeProjects();
    }
    updateTodo(id,title, description, dueDate, priority, isDone){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos[index] = new Todo(title, description, dueDate, priority, isDone);
        storageManager.storeProjects();
    }
    getTodo(id){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        return this.todos[index];
    }
}
export default List;