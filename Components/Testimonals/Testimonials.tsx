
//styles
import { Wrapper, Content, Image, Heading, Subtitle, Grid, Column } from "./Testimonials.styles"

export interface TestProps  {
    heading: string
    subtitle: string
    quote: string
    card?: boolean
    image?: string
}

const Testimonials = (props:TestProps) => {

    return (
        <Wrapper>
            {props.image && 
                <Image src={props.image} />
            }
            <Content>
                {props.card ?? 
                    <Grid>
                        <Column>
                            <Heading>{props.heading}</Heading>
                            <Subtitle>{props.subtitle}</Subtitle>
                        </Column>
                    </Grid>
                } : {
                    <Column>
                        <Heading>{props.heading}</Heading>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </Column>
                }
            </Content>
        </Wrapper>
    )
}

export default Testimonials