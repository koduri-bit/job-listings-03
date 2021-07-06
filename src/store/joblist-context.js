import React from 'react';
import {useState, useEffect, useReducer} from 'react'
import JobItem from "../components/JobList/JobItem/JobItem";
import photosnap from "../assets/images/photosnap.svg";
import manage from "../assets/images/manage.svg";
import account from "../assets/images/account.svg";
import myhome from "../assets/images/myhome.svg";
import loopstudios from "../assets/images/loop-studios.svg";
import faceit from "../assets/images/faceit.svg";
import shortly from "../assets/images/shortly.svg";
import insure from "../assets/images/insure.svg";
import eyecamco from "../assets/images/eyecam-co.svg";
import theairfilter from "../assets/images/the-air-filter-company.svg";



const JobListContext = React.createContext({
        jobTagsDisplayState: () => {},
        jobItemsInList: [],
        removeTagFromSavedList: (tagName) =>{} ,
        clearAllTagsFromFilter: () =>{}
    }

)


const INITIAL_JOB_LIST = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": `${photosnap}`,
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": `${manage}`,
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": `${account}`,
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": `${myhome}`,
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": `${loopstudios}`,
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": `${faceit}`,
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": `${shortly}`,
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": `${insure}`,
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": `${eyecamco}`,
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": `${theairfilter}`,
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
]

const jobTagsToDisplayReducer = (prevState,action) => {


    if(action.type === 'SAVE_USER_SELECTED_TAG'){
        if(prevState.findIndex(alreadyExistTag => action.tagName === alreadyExistTag) < 0){
            return [ ...prevState, action.tagName];
        }
    }

    if(action.type === 'REMOVE_USER_SELECTED_TAG'){
        let newTags = []
        let oldTags = [...prevState];
        newTags = oldTags.filter( tag => tag !== action.tagName);
        return [...newTags];
    }

    if(action.type === 'CLEAR_ALL_USER_SELECTED_TAG'){
        return [];
    }

    return [];
}



export const JobListContextProvider = (props) =>{


    const [JOB_LIST_INITIAL] = useState(INITIAL_JOB_LIST);
    const [JOB_LIST_LATER, setJobListLater] = useState(INITIAL_JOB_LIST);
    const [jobTagsDisplayState , dispatchJobTags] =  useReducer(jobTagsToDisplayReducer, [])

    useEffect( ()  => {
        let initialJobList = [...JOB_LIST_INITIAL];
        let newJobList = [];


        for(let jobItem of initialJobList){
            let languagesInEachJob = jobItem['languages']
            if(jobTagsDisplayState.length >0 ){
                outer1 :    for(let i of jobTagsDisplayState){
                    if(languagesInEachJob.length > 0){
                        for(let j of languagesInEachJob){
                            if( i === j){
                                newJobList.push(jobItem);
                                break outer1;
                            }
                        }
                    }

                }
            }
        }

        if(jobTagsDisplayState.length > 0){
            setJobListLater( prevState => {
                return [...newJobList]
            })
        }else{
            setJobListLater(initialJobList)
        }



    }, [jobTagsDisplayState,JOB_LIST_INITIAL])




    const saveUserClickedJobTagsInJobItem = ( tagName) =>{
        dispatchJobTags({type: 'SAVE_USER_SELECTED_TAG' , tagName: tagName})
    }


    const removeTagFromSavedList = (tagName) =>{
        dispatchJobTags({type: 'REMOVE_USER_SELECTED_TAG' , tagName: tagName})
    }

   const clearAllTagsFromFilter = () => {
       dispatchJobTags({type: 'CLEAR_ALL_USER_SELECTED_TAG'});
   }
    const jobItemsInList = JOB_LIST_LATER.map( jobitem => {

        return <JobItem
            key={jobitem.id}
            id={jobitem.id}
            logo= {jobitem.logo}
            position={jobitem.position}
            company={jobitem.company}
            new={jobitem.new}
            featured={jobitem.featured}
            postedAt={jobitem.postedAt}
            contract={jobitem.contract}
            location={jobitem.location}
            languages={jobitem.languages}
            tools={jobitem.tools}
            role={jobitem.role}
            level={jobitem.level}
            saveUserClickedJobTagsInJobItem={saveUserClickedJobTagsInJobItem}
        />
    }

    )



    return(
        <JobListContext.Provider
            value={{
                jobTagsDisplayState: jobTagsDisplayState,
                jobItemsInList: jobItemsInList,
                removeTagFromSavedList: removeTagFromSavedList,
                clearAllTagsFromFilter:clearAllTagsFromFilter,
            }}
        >
            {props.children}
        </JobListContext.Provider>
    )
}

export default JobListContext