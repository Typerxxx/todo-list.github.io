import React, {useState} from 'react'
import classes from './DropDown.module.css'


const DropDown = ({options, tasks, setTasks}) => {
    const [sort, setSort] = useState('all');

    const sortIt = (value) => {
        setSort(value)
        setTasks(tasks.filter((task)=> value == task.completed))
    }

    return(
        <select value={sort} className={classes.drop_down_menu} onChange={(e) => sortIt(e.target.value)}>
                    <option className={classes.el}>
                        all
                    </option>
                    {options.map((option)=>
                        <option key={option.value} value={option.value}>{option.name}</option>    
                    )}
        </select>
    )
}


export default DropDown;