import List from "./list";
const manager = (()=>{
    let lists = [];
    const removeList = (id)=>{
        let index = lists.map((e)=> e.id).indexOf(id);
        lists.splice(index,1);
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
        return list.id;
    }
    return {createList, removeList, getCurrentLists, getList};

})();
export default manager;