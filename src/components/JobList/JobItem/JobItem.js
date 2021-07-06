import classes from './JobItem.module.css'
import JobFeatured from "./JobFeatured";
import PostedContractLocation from './PostedContractLocation'
import JobTags from "./JobTags";
import { useMediaQuery } from 'react-responsive'

const JobItem = (props) => {
        const isMobile = useMediaQuery({ query: `(max-width: 376px)` });
        if(isMobile){
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

        return(
            <li className={classes.jobitem}>

                    <img className={classes['item-logo']} src={props.logo} alt={props.company}/>

                    <div className={classes.centerItem}>
                            <JobFeatured {...props}/>
                            <span className={classes.position}>{props.position}</span>
                            <PostedContractLocation {...props}/>
                    </div>

                    <JobTags {...props}/>

            </li>
        )



}

export default JobItem