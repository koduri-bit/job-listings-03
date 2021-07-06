
import classes from './PostedContractLocation.module.css'

const PostedContractLocation = (props) =>{


    return (
        <div className={classes['job-relConLoc']}>
            { props.postedAt ? <span className={classes.postedAt}>{props.postedAt}</span>: null}
            { props.contract ?   <span className={classes.contract}>{props.contract}</span> : null }
            { props.location ?   <span className={classes.loc}>{props.location}</span> : null }

        </div>
    )
}

export default PostedContractLocation