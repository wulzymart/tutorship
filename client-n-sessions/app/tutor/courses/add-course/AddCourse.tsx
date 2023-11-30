"use client"

import Button from "@/app/components/utils/Button"
import TextInput from "@/app/components/utils/TextInput"
import { useState } from "react"

const AddCourseUtil = () => {
    const [courseName, setCourseName] = useState('')
    const [about, About] = useState("")
    const [free, setFree] = useState(false)
    const [price, setPrice] = useState(0)
    return (<div>
        <form action="">
        <div className="flex gap-4">
        <label htmlFor="title">Course Title</label>
        <TextInput type={"text"} name="title" value={courseName} handleChange={(e) => 
                setCourseName(e.currentTarget.value)
             }/>        
        </div>
        <div className="flex gap-4">
        <label htmlFor="title">About</label>
          
        </div>
    <Button text="Add" handleClick={()=>console.log(courseName)}/>
        </form>
    </div>)
}
export default AddCourseUtil