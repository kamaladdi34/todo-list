import DOMmanager from "./DOM-manager";
const popupManager = (()=>{
    const addTaskPopUp = document.querySelector('.add-task-popup');
    const addProjectPopUp = document.querySelector('.add-project-popup');
    const addTaskTitle = document.querySelector('#task-title');
    const addTaskDescription = document.querySelector('#task-dsc');
    const addTaskPriority = document.querySelector('#priority');
    const addTaskIsDone = document.querySelector('#is-done');
    const addTaskButton = document.querySelector('.add-task-popup .add');

    const addTask = document.querySelector('.add-task');
    addTask.addEventListener('click',(event)=>{
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
    })
    addTaskButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addTaskPopUp.checkValidity()){
            addTaskPopUp.classList.add('hidden');
            DOMmanager.addTask(getTaskPopUpInput());
        }else{
            addTaskPopUp.reportValidity();
        }
    })
    const getTaskPopUpInput = ()=>{
        return {
            title: addTaskTitle.value,
            description: addTaskDescription.value,
            priority: addTaskPriority.value,
            isDone: addTaskIsDone.checked,
        }
    }
})();
export default popupManager;