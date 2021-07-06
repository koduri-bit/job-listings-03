
import classes from './JobFeatured.module.css';

const JobFeatured =(props) => {

    return(
        <div className={classes['job-featured']}>
            { props.company ? <span className={classes.company}>{props.company}</span>: null}
            { props.new ?   <span className={classes.new}>NEW!</span> : null }
            { props.featured ?   <span className={classes.featured}>FEATURED</span> : null }

        </div>
    )
}

export default JobFeatured