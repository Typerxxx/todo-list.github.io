import React, {useEffect, useMemo, useState} from "react";
import MyTask from "./UI/task/MyTask";
import { useFetching } from "../hooks/useFetching";
import TaskService from "../API/TaskService";
import Navbar from "./UI/navbar/Navbar";
import MyModal from "./UI/modal/MyModal";
import Pagin from "./pagination/Pagin"


const TaskList = () => {


    const [tasks, setTasks] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [sort, setSort] = useState();
    const [shown, setShown] = useState();
    const [pageCount, setPage] = useState(1);


    const [fetchedTodos,error,completed] = useFetching(() => getTodos(5,pageCount))
    

    const getTodos = async (lim, page) => {
        const response = await TaskService.getAll(lim,page);
        setTasks(response.data);
        setTotalCount(response.headers['x-total-count'])
    }

    

    useEffect(() =>{
        fetchedTodos()
    },[pageCount])


    const show = () => {
        setShown(true);
      }
      const close = () => {
        setShown(false);
      }
  
  
    const removeTask = (id) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }

    
 
    const createTask = (newTask) => {
        setTasks([newTask,...tasks])
        close();
    } 
    
    const next = (e) => {
        e.preventDefault();
        setPage(pageCount+1);
    }
    
    const prev = (e) => {
        e.preventDefault();
        setPage(pageCount-1)
    }

    return(
        <div>
            <Navbar 
            show={show} 
            tasks={tasks}
            setTasks={setTasks}/>
            {
                shown 
                ? <MyModal 
                close={close}
                create={createTask}
                />  
                : console.log(shown)
            }
      
            {completed 
            ? tasks.map((task) =>   
                <MyTask
                title={task.title}
                comp={task.completed}
                userId={task.userId}
                key={task.id}
                id={task.id}
                create={createTask}
                remove={removeTask}
            />
            )
            : console.log(error)}
            <Pagin next={next} prev={prev}/>
        </div>
    );
}


export default TaskList;
