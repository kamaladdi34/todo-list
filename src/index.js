import manager from "./todo-list-manager";
let listId = manager.createList('MyList','My nice big list',[],false);
console.log(manager.getList(listId));
manager.getList(listId).addTodo('Feed Dog', 'Feed dog some food', 'dueDate', 'medium', false);