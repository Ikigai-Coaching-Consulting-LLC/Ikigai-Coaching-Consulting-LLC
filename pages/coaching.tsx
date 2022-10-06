import data from "../content.json";
import { Wrapper, Header, Content, List } from "../styles/Home.styles";



const coach = data.careerCoaching;

const CareerCoaching = () => {
    return (
        <Wrapper>
            <Header>{coach.header}</Header>
            <h3>{coach.subHeader}</h3>
            {coach.typesOfCoaching.map((data , index) => {
                return (
                    <Content key={index}>
                        <h3>{data.coaching}</h3>
                        <List>
                        {data.topicsCovered.map(topic => 
                            <li>{topic}</li>
                        )}
                        </List>
                    </Content>
                )
            })}
        </Wrapper>
            
    )
}

export default CareerCoaching;