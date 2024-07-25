import React, {useState} from "react";
import classes from './MyModal.module.css'
import cross from './cross.png'

const MyModal = ({close,create}) => {
    const [inputValue, setInputValue] = useState('');
    

    return(
        <div className={classes.modal} >
            <div className={classes.content}>
                <div className={classes.img} onClick={close} >
                    <img src={cross} alt="" />
                </div>
                <div className={classes.form}>
                    <div className={classes.input}>
                        <span>Enter title: </span>
                        <input className={classes.taskInput} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    </div>
                    <div className={classes.addButton} onClick={() =>{
                                create({
                                    id:Date.now(),
                                    title:inputValue,
                                    completed:false,
                                    key:Date.now(),
                                    userId:Date.now(),
                                })
                                console.log(inputValue)
                    } }>
                        <div>Add</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}


export default MyModal;