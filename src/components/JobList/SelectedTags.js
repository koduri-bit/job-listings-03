import classes from './SelectedTags.module.css';
import JobListContext from "../../store/joblist-context";
import React, {useContext} from "react";



const SelectedTags = () =>{


    const ctx = useContext(JobListContext)

    const tagToClose = ( event) =>{
        event.preventDefault();
        ctx.removeTagFromSavedList(event.target.innerText)

    }

    const filterTags = ctx.jobTagsDisplayState.map( (tag , index)=> {
        return <span
                key={index}
                className={ classes.tag  }
                onClick={tagToClose}
                >

                    {tag}
               </span>


    })
    return (
        <div className={classes.jobtag}>
            {filterTags}
            <button
                className={classes.clearbtn}
                onClick={ctx.clearAllTagsFromFilter}>Clear</button>
        </div>
    )
}

export default SelectedTags