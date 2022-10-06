import data from "../content.json";
import { Wrapper, Header, Content } from "../styles/Home.styles";



const coach = data.careerCoaching;

const WorkshopPage = () => {
    return (
        <Wrapper>
            <Header>{coach.header}</Header>
            <h3>{coach.subHeader}</h3>
            <Content>
            {coach.typesOfCoaching.map((data , index) => {
                return (
                    <div key={index}>
                        <h3>{data.coaching}</h3>
                        <ul>
                        {data.topicsCovered.map(topic => 
                            <li>{topic}</li>
                        )}
                        </ul>
                    </div>
                )
            })}
            </Content>
        </Wrapper>
            
    )
}

export default WorkshopPage;