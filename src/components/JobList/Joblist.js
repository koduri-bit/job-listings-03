import {useContext ,Fragment} from 'react'
import classes from './Joblist.module.css'
import SelectedTags from '../JobList/SelectedTags'
import JobListContext from "../../store/joblist-context";
import {useMediaQuery} from "react-responsive";

const Joblist = (props) =>{

    const ctx = useContext(JobListContext);
    const isMobile = useMediaQuery({ query: `(max-width: 376px)` });

    if(isMobile){
        if(ctx.jobTagsDisplayState.length > 0){
            const styles = classes['expand-margin-for-joblist'] + ' ' + classes['ul-joblist']

            return (
                <Fragment>
                    <div className={classes['job-list']}>

                        {ctx.jobTagsDisplayState.length > 0 ? <SelectedTags  /> : null     }

                        <ul className={styles}>
                            {ctx.jobItemsInList}
                        </ul>

                    </div>
                </Fragment>

            )
        }
        return (
            <Fragment>
                <div className={classes['job-list']}>

                    {ctx.jobTagsDisplayState.length > 0 ? <SelectedTags  /> : null     }

                    <ul className={classes['ul-joblist']}>
                        {ctx.jobItemsInList}
                    </ul>

                </div>
            </Fragment>

        )
    }

    return (
        <Fragment>

            <div className={classes['job-list']}>
                {ctx.jobTagsDisplayState.length > 0 ? <SelectedTags /> : null  }
                <ul className={classes['ul-joblist']}>
                    {ctx.jobItemsInList}
                </ul>

            </div>
        </Fragment>

    )

}

export default Joblist