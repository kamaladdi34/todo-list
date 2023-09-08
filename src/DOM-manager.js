import manager from "./todo-list-manager";
import Todo from "./todo";
const DOMmanager = (()=>{
    const createProjectButton = document.querySelector('.add-project');
    const projectsList = document.querySelector('aside');
    const taskList = document.querySelector('.task-list');
    let projects = [];
    const updateTasks = (project)=>{
        project.todos.forEach(task => {
            taskList.append(createTask(task))
        });
    }
    const createProject = (project)=>{
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
        bar.append(barName, deleteButton);
        projectsList.append(bar);
        return bar;
    }
    const deleteProject = (projectId)=>{
        let index = projects.map((e)=> e.project.id).indexOf(projectId);
        manager.removeList(projectId);
        projects[index].projectBar.remove();
        projects.splice(index,1);
    }
    let todoExample = new Todo('feed puppy', 'feed puppy some food', 'today', 'high', false);
    createProjectButton.addEventListener('click',(e)=>{
        let result = manager.createList('MyList','My nice big list',[todoExample],false);
        createProject(result.project);
    })
})();
export default DOMmanager;