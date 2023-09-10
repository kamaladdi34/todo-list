import manager from "./todo-list-manager";
import popupManager from "./popup-manager";
import Todo from "./todo";
const DOMmanager = (()=>{
    const createProjectButton = document.querySelector('.add-project');
    const projectsList = document.querySelector('aside');
    const taskList = document.querySelector('.task-list');
    let projects = [];
    let currentProjectId = null;
    const updateTasks = (project)=>{
        taskList.innerHTML = '';
        project.todos.forEach(task => {
            taskList.append(createTask(task))
        });
    }
    const createProject = (project)=>{
        currentProjectId = project.id;
        let projectBar = createProjectBar(project);
        projects.push({projectBar: projectBar, project: project});
        updateTasks(project);
    }
    const createTask = (todo)=>{
        let task = document.createElement('div');
        let title = document.createElement('p');
        title.innerText = todo.title;
        task.append(title);
        return task;
    }
    const createProjectBar = (project)=>{
        let bar = document.createElement('div');
        let barName = document.createElement('p');
        barName.innerText = project.name;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click',(e)=>{
            deleteProject(project.id);
        })
        if(project.isPersistent){
            bar.append(barName);
        }else{
            bar.append(barName, deleteButton);
        }
        projectsList.append(bar);
        return bar;
    }
    const deleteProject = (projectId)=>{
        let index = projects.map((e)=> e.project.id).indexOf(projectId);
        manager.removeList(projectId);
        projects[index].projectBar.remove();
        projects.splice(index,1);
    }
    const addTask = (taskInput)=>{
        let index = projects.map((e)=> e.project.id).indexOf(currentProjectId);
        index = index<0? 0 : index;
        projects[index].project.addTodo(taskInput.title, taskInput.description, 'today', taskInput.priority, taskInput.isDone);
        updateTasks(projects[index].project);
    }
    const addProject = (projectInput)=>{
        let result = manager.createList(projectInput.title,projectInput.description,[],false);
        createProject(result.project);
    }
    // creating the general project / list 
    let result = manager.createList('General','General list',[],true);
    createProject(result.project);
    return {addTask, addProject}
})();
export default DOMmanager;