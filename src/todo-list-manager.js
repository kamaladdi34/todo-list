import List from "./list";
import storageManager from "./storage-manager";
const manager = (()=>{
    let lists = [];
    const removeList = (id)=>{
        let index = lists.map((e)=> e.id).indexOf(id);
        lists.splice(index,1);
        storageManager.storeProjects();
    } 
    const getCurrentLists = () => lists;
    const getListIndexById = (id)=>{
        return lists.map((e)=> e.id).indexOf(id);
    } 
    const getList = (id)=>{
        let index = getListIndexById(id);
        return lists[index];
    }
    const createList = (name, description, todos, isPersistent)=>{
        let list = new List(name, description, todos, isPersistent);
        list.id = lists.length;
        lists.push(list);
        storageManager.storeProjects();
        return {id: list.id, project: list};
    }
    return {createList, removeList, getCurrentLists, getList};
})();
export default manager;