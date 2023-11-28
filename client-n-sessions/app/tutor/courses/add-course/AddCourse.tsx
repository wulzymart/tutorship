"use client"

import Button from "@/app/components/utils/Button"
import TextInput from "@/app/components/utils/TextInput"
import { useState } from "react"

const AddCourseUtil = () => {
    const [courseName, setCourseName] = useState('')
    return (<div className="flex gap-4">
        <TextInput type={"text"} name="title" value={courseName} handleChange={(e) => 
                setCourseName(e.currentTarget.value)
             }/>
        <Button text="Add" handleClick={()=>console.log(courseName)}/>
    </div>)
}
export default AddCourseUtil