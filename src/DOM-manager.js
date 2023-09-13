import manager from "./todo-list-manager";
import popupManager from "./popup-manager";
import storageManager from "./storage-manager";
const DOMmanager = (()=>{
    const projectsList = document.querySelector('aside');
    const taskList = document.querySelector('.task-list');
    const todoHeaderProjectTitle = document.querySelector('.todo-header > p');
    let projects = [];
    let currentProjectId = null;
    const updateTasks = (project)=>{
        taskList.innerHTML = '';
        project.todos.forEach(task => {
            taskList.append(createTask(task, project))
        });
        todoHeaderProjectTitle.innerText = project.name;
    }
    const createProject = (project)=>{
        currentProjectId = project.id;
        let projectBar = createProjectBar(project);
        projects.push({projectBar: projectBar, project: project});
        updateTasks(project);
        updateSelectedClass(project.id);
        return project;
    }
    const createTask = (todo, project)=>{
        let task = document.createElement('div');
        let title = document.createElement('p');
        title.innerText = `${todo.title}`;
        title.classList.add('todo-title');
        let closeButton = document.createElement('button');
        let buttons = document.createElement('div');
        buttons.classList.add('todo-buttons');
        closeButton.innerText = 'Delete';
        closeButton.classList.add('delete');
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit'
        editButton.addEventListener('click',(event)=>{
            event.stopPropagation();
            popupManager.showUpdatePopup(todo.id,project.id);
        });
        let priority = document.createElement('div');
        priority.innerText = todo.priority;
        priority.classList.add('priority', todo.priority)
        let dueDate = document.createElement('div');
        dueDate.innerText = todo.dueDate;
        dueDate.classList.add('due-date')
        buttons.append(dueDate, priority,closeButton, editButton);
        let details = document.createElement('div');
        details.innerText = todo.description;
        details.classList.add('todo-details')
        task.classList.add('todo');
        details.classList.add('shown');
        task.addEventListener('click',()=>{
            details.classList.toggle('shown');
        })
        let container = document.createElement('div');
        task.append(title,buttons);
        container.append(task, details);
        closeButton.addEventListener('click',()=>{
            project.removeTodo(todo.id);
            updateTasks(project);
        })
        return container;
    }
    const createProjectBar = (project)=>{
        let bar = document.createElement('div');
        bar.classList.add('selected-project');
        let barName = document.createElement('p');
        barName.innerText = project.name;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete');
        bar.classList.add('project');
        deleteButton.addEventListener('click',(e)=>{
            e.stopPropagation();
            deleteProject(project.id);
        })
        if(project.isPersistent){
            bar.append(barName);
        }else{
            bar.append(barName, deleteButton);
        }
        projectsList.append(bar);
        bar.addEventListener('click',()=>{
            updateTasks(project);
            updateSelectedClass(project.id);
            currentProjectId = project.id;
        })
        return bar;
    }
    const updateSelectedClass = (id)=>{
        for (let i = 0; i < projects.length; i++) {
            if(projects[i].project.id == id){
                projects[i].projectBar.classList.add('selected-project');
            }else{
                projects[i].projectBar.classList.remove('selected-project');
            }
                
        }
    }
    const deleteProject = (projectId)=>{
        let index = projects.map((e)=> e.project.id).indexOf(projectId);
        manager.removeList(projectId);
        projects[index].projectBar.remove();
        projects.splice(index,1);
        currentProjectId = 0;
        updateSelectedClass(0);
        updateTasks(projects[0].project)
    }
    const addTask = (taskInput)=>{
        let index = projects.map((e)=> e.project.id).indexOf(currentProjectId);
        projects[index].project.addTodo(taskInput.title, taskInput.description, taskInput.dueDate, taskInput.priority, taskInput.isDone);
        updateTasks(projects[index].project);
    }
    const addProject = (projectInput)=>{
        let result = manager.createList(projectInput.title,projectInput.description,[],false);
        createProject(result.project);
    }
    
    const displayStoredProjects = ()=>{
        let data = storageManager.loadProjects();
        for (let i = 0; i < data.length; i++) {
            let result = manager.createList(data[i].name,data[i].description,[],data[i].isPersistent);
            for (let j = 0; j < data[i].todos.length; j++) {
                let todo = data[i].todos[j];
                result.project.addTodo(todo.title,todo.description,todo.dueDate,todo.priority,todo.isDone);
            }
            createProject(result.project);
        }
    }
    displayStoredProjects();
    // creating the general project / list 
    if(!localStorage.getItem('created-genera-project')){
        let result = manager.createList('General','General list',[],true);
        result.project.addTodo('Pet the cat','Pet the cat, once only!','2029-09-27','medium',false);
        localStorage.setItem('created-genera-project',true);
        createProject(result.project);
    }
    return {addTask, addProject, updateTasks}
})();
export default DOMmanager;