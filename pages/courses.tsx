import data from "../content.json";

interface OnlineCourses {
    header: string
    subHeader: string
    typesOfCourses: TypesOfCourse[]
}

interface TypesOfCourse {
    course: string
    description: string
}

const onlineCourseData:OnlineCourses = data.onlineCourses;
const typesOfCourses:TypesOfCourse[] = data.onlineCourses.typesOfCourses;

const Courses = () => {
    return (
        <>
            <h1>Online Courses</h1>
            <h2>{onlineCourseData.header}</h2>
            <h3>{onlineCourseData.subHeader}</h3>
            <div>{typesOfCourses.map((object, index) => {
                return (
                    <div key={index}> {object.course}:
                        <p>{object.description}</p>
                    </div>
                )
            })}</div>
        </>
    )
}

export default Courses;