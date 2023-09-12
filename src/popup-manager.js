import DOMmanager from "./DOM-manager";
import manager from "./todo-list-manager";
const popupManager = (()=>{
    const addTaskPopUp = document.querySelector('.add-task-popup');
    const addTaskPopUpTitle = document.querySelector('.add-task-popup > .header >  legend');
    const addTaskTitle = document.querySelector('#task-title');
    const addTaskDescription = document.querySelector('#task-dsc');
    const addTaskPriority = document.querySelector('#priority');
    const addTaskIsDone = document.querySelector('#is-done');
    const addTaskDueDate = document.querySelector('#task-date')
    const addTaskButton = document.querySelector('.add-task-popup .add');
    const addTask = document.querySelector('.add-task');
    const closeTaskPopUpButton = document.querySelector('.add-task-popup > .header > .close');
    
    const addProjectPopUp = document.querySelector('.add-project-popup');
    const addProjectTitle = document.querySelector('#project-title');
    const addProjectDescription = document.querySelector('#project-description');
    const addProjectButton = document.querySelector('.add-project-popup .add');
    const closeProjectPopUpButton = document.querySelector('.add-project-popup > .header > .close');

    let popupCall = ()=>{
        DOMmanager.addProject(getProjectPoPupInput());
    }
    const addProject = document.querySelector('.add-project');
    addProject.addEventListener('click',(event)=>{
        addProjectPopUp.classList.remove('hidden');
        addProjectPopUp.reset();
        addProjectTitle.focus();
        addProjectTitle.select();
    })
    closeProjectPopUpButton.addEventListener('click',(event)=>{
        addProjectPopUp.classList.add('hidden');
        event.preventDefault();
    })
    const setTaskPopUp = (title, buttonText)=>{
        addTaskPopUpTitle.innerText = title;
        addTaskButton.innerText = buttonText;
        
    }
    addProjectButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addProjectPopUp.checkValidity()){
            addProjectPopUp.classList.add('hidden');
            DOMmanager.addProject(getProjectPoPupInput());
        }else{
            addProjectPopUp.reportValidity();
        }
    })
    closeTaskPopUpButton.addEventListener('click',(event)=>{
        addTaskPopUp.classList.add('hidden');
        event.preventDefault();
    })
    addTask.addEventListener('click',(event)=>{
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
        addTaskTitle.focus();
        addTaskTitle.select();
        setTaskPopUp('Add new task', 'Add');
        popupCall = ()=>{
            DOMmanager.addTask(getTaskPopUpInput());
        }

    })
    addTaskButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addTaskPopUp.checkValidity()){
            addTaskPopUp.classList.add('hidden');
            popupCall();
            
        }else{
            addTaskPopUp.reportValidity();
        }
    })
    const showUpdatePopup = (taskId, projectId)=>{
        console.log(taskId,projectId);
        setTaskPopUp('Update todo', 'Update');
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
        let todo  = manager.getList(projectId).getTodo(taskId);
        addTaskTitle.value = todo.title;
        addTaskDescription.value = todo.description;
        addTaskDueDate.value = todo.dueDate;
        addTaskPriority.value = todo.priority;
        addTaskIsDone.checked = todo.isDone;
        popupCall = ()=>{
            let input = getTaskPopUpInput();
            manager.getList(projectId).updateTodo(taskId, input.title, input.description, input.dueDate, input.priority, input.isDone)
            DOMmanager.updateTasks(manager.getList(projectId));
        }
    }
    const getTaskPopUpInput = ()=>{
        return {
            title: addTaskTitle.value,
            description: addTaskDescription.value,
            dueDate: addTaskDueDate.value,
            priority: addTaskPriority.value,
            isDone: addTaskIsDone.checked,
        }
    }
    const getProjectPoPupInput = ()=>{
        return{
            title: addProjectTitle.value,
            description: addProjectDescription.value,
        }
    }
    return {showUpdatePopup}
})();
export default popupManager;