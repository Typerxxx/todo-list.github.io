import React, {useState} from "react";
import classes from "./Navbar.module.css"
import DropDown from "../dropdown/DropDown";
import addImage from './add.png'
import burgerImage from './burger.png'


const Navbar = ({show, tasks, setTasks}) => {
    const [burgerShow, setBurgerShow] = useState(false);

    
    const change = () => {
        burgerShow
        ? setBurgerShow(false)
        : setBurgerShow(true) 
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.flex_item_1}>
                <div className={classes.burger} onClick={change}>
                    <img src={burgerImage} alt="" />
                </div>
                {
                    burgerShow
                    ? <DropDown 
                        tasks={tasks}
                        setTasks={setTasks}
                        options={[
                            {value: true,  name:"comleted"},
                            {value: false, name:"uncompleted"},
                        ]}

                    />
                    : console.log()
                }
                
            </div>
            <div className={classes.flex_item_3} >
                <img src={addImage} alt="" onClick={show}/>
            </div>
            <div className={classes.flex_item_2}></div>
        </div>
    )
}


export default Navbar