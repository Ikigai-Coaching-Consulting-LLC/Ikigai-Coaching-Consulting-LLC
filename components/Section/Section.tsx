import { Card, Grid, Wrapper } from "./Section.styles";

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
            {data?.map((object:any, index:any) => {
                if(typeof object === 'string'){
                    return(
                        <div key={index}>{object}
                        </div>
                    )
                }
                return (
                    <Grid>
                        <Card key={index}>{object.course}:
                            {object.description}
                        </Card>
                    </Grid>
                )
            })}
            {props.children && <>{props.children}</>}
        </Wrapper>
    )
}
