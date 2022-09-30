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
            <h1>Workshops</h1>
            <Section header={workshopData.header} subHeader={workshopData.subHeader} typesOfWorkshops={workshopData.typesOfWorkshops}/>
        </Wrapper>
    )
}

export default WorkshopPage;