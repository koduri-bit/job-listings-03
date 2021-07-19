import {useContext ,Fragment} from 'react'
import classes from './Joblist.module.css'
import SelectedTags from '../JobList/SelectedTags'
import JobListContext from "../../store/joblist-context";


const Joblist = (props) =>{

    const ctx = useContext(JobListContext);


    const styleForJobListInMobile =  ctx.jobTagsDisplayState.length > 0 ? classes['ul-joblist'] + ' ' + classes['joblistExtraMargin'] : classes['ul-joblist'] ;


    return (
        <Fragment>

            <div className={classes['job-list']}>
                {ctx.jobTagsDisplayState.length > 0 ? <SelectedTags /> : null  }
                <ul className={styleForJobListInMobile}>
                    {ctx.jobItemsInList}
                </ul>

            </div>
        </Fragment>

    )

}

export default Joblist