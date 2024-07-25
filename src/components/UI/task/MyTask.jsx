import React, { useEffect, useState} from "react";
import classes  from "../../../style/MyTask.module.css"
import bin from './bin.png';
import done from './done.png'
import cross from './cross.png'

const MyTask = ({title, userId, id, key, comp, remove, create}) => {
    const [task, setTask] = useState({});
    const [index, setIndex] = useState(1);
    const [completed,setCompleted] = useState(comp);
    useEffect(()=>{
        setTask({
            title:      title,
            userId:     userId,
            id:         id,
            index:      index,
            key:        key,
            completed:  completed, 
            src:        completed 
            ?           done
            :           cross
        })

    },[])  

    const markIt = () => {
        setCompleted(true);
        setTask({...task, src: done})
    }


    const addNewTask = () => {
        const newTask = {
            ...task, id:Date.now()
        }
        create(newTask)
        setTask({title:''})
    }
    


    return (
            <div className={classes.task}>
                <div className={classes.mark}>
                    <div onClick={markIt}>
                        <img width={40} src={task.src}  className={classes.mark}/>
                    </div>
                    <div className={classes.task_title}>
                        {task.title}
                    </div><br/>
                </div>
                <div className={classes.button_div} onClick={() => remove(id)}>
                    <img src={bin} alt="" />
                </div>
            </div>
    )
}



export default MyTask;