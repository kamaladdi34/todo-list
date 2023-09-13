import manager from "./todo-list-manager";
const storageManager = (()=>{

    const storeProjects = ()=>{
        localStorage.setItem('projects',JSON.stringify(manager.getCurrentLists()))
    }
    const loadProjects = ()=>{
        let data = JSON.parse(localStorage.getItem('projects'));
        if(data){
            return JSON.parse(localStorage.getItem('projects'));
        } else{
            return [];
        }
    }
    loadProjects();
    return {storeProjects, loadProjects}
})();
export default storageManager;