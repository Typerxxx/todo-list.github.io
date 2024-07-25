import React from "react";
import classes from './Pagin.module.css'
import previous from './previous.png'
import nextPage from './next.png'

const  Pagin = ({next,prev}) => {


    return(
        <div className={classes.wrapper}>
            <div className={classes.flex_element} onClick={(e) => prev(e)}>
                <img src={previous} alt="" />
            </div>
            <div className={classes.flex_element} onClick={(e) => next(e)} >
                <img src={nextPage} alt="" />
            </div>
        </div>
    )
}


export default Pagin;