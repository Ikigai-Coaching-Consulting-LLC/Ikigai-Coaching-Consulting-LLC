import data from "../content.json";
import { Wrapper } from "../styles/Home.styles";
import { Section } from "../Components/Section/Section";

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

const CoursesPage = () => {
    return (
        <Wrapper>
            <h1>Online Courses</h1>
            <Section header={onlineCourseData.header} subHeader={onlineCourseData.subHeader} typesOfCourses={typesOfCourses}/>
        </Wrapper>
    )
}

export default CoursesPage;