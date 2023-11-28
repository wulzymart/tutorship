import Button from "@/app/components/utils/Button"
import Header5 from "@/app/components/utils/Header5"
import AddCourseUtil from "./AddCourse"

const AddCourse = () => {
    
    return (<div>
        <div className="mb-20"><h2 className="text-2xl text-center capitalize">New Course</h2></div>
        <div><Header5 text="Enter course title"/>
        <AddCourseUtil/>
        </div>
    </div>)
}

export default AddCourse