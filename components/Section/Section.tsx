import { Card, CardTitle, CardBody, Wrapper, Grid, Content } from "./Section.styles";

interface SectionProps {
    header?: string,
    subHeader?: string,
    typesOf?: any[],
    children?: React.ReactNode
}


export const Section = (props: SectionProps) => {

    const data = props.typesOf
    return (
        <Wrapper>
            <h1>{props.header}</h1>
            {data?.length &&
                <Grid>
                    {data?.map((object:any, index:any) => {
                        if(typeof object === 'string'){
                            return(
                                <div key={index}>{object}
                                </div>
                            )
                        }
                        return (
                            <Card key={index}>
                                <CardTitle>{object.course}:</CardTitle>
                                <CardBody>{object.description}</CardBody>
                            </Card>
                        )
                    })}
                </Grid>
            }
            <Content>   
                {props.children && <>{props.children}</>}
            </Content>
        </Wrapper>
    )
}
