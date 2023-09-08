import manager from "./todo-list-manager";
let listId = manager.createList('MyList','My nice big list',[],false);
console.log(manager.getList(listId));
manager.getList(listId).addTodo('Feed Dog', 'Feed dog some food', 'dueDate', 'medium', false);
manager.getList(listId).addTodo('Feed Dog #2', 'Feed dog some food', 'dueDate', 'medium', false);
console.log(manager.getList(listId));
manager.getList(listId).removeTodo(1);
console.log(manager.getList(listId));
