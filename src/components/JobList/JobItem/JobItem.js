import classes from './JobItem.module.css'
import JobFeatured from "./JobFeatured";
import PostedContractLocation from './PostedContractLocation'
import JobTags from "./JobTags";

const JobItem = (props) => {


        return(
            <li className={classes.jobitem}>

                    <img className={classes['item-logo']} src={props.logo} alt={props.company}/>

                    <div className={classes.centerItem}>
                            <JobFeatured {...props}/>
                            <span className={classes.position}>{props.position}</span>
                            <PostedContractLocation {...props}/>
                    </div>
                     <div className={classes.borderToSetInsideJobItem}></div>
                    <JobTags {...props}/>

            </li>
        )




}

export default JobItem