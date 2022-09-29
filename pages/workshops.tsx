import data from "../content.json";

interface Workshops {
    header: string
    subHeader: string
    typesOfWorkshops: string[]
}

const workshopData:Workshops = data.workshops;

const WorkshopPage = () => {
    return (
        <>
            <h1>Workshops</h1>
            <h2>{workshopData.header}</h2>
            <h3>{workshopData.subHeader}</h3>
            {workshopData.typesOfWorkshops.map((workshop, index) => {
                return <div key={index}>{workshop}</div>
            })}
        </>
    )
}

export default WorkshopPage;