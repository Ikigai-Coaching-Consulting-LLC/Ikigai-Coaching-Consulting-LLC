import data from "../content.json";
import { Wrapper } from "../styles/Home.styles";
import { Section } from "../Components/Section/Section";

interface Workshops {
    header: string
    subHeader: string
    typesOfWorkshops: string[]
}

const workshopData:Workshops = data.workshops;

const WorkshopPage = () => {
    return (
        <Wrapper>
            <Section subHeader={workshopData.subHeader} typesOf={workshopData.typesOfWorkshops}/>
        </Wrapper>
    )
}

export default WorkshopPage;