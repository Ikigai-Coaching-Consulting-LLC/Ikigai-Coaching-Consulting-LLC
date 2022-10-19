
import { Wrapper, Title, Content } from './HeroImage.styles'

export interface HeroImageProps {
    background: string
    title: string
    content?: string
    styles?: string
}

const HeroImage = (props:HeroImageProps) => {
    return (
        <Wrapper background={props.background} className={props.styles ? props.styles : ''} >         
            <Content>
                {props.content ? (
                    <div>
                        <Title>{props.title}</Title>
                        <div>{props.content}</div>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </Content>
        </Wrapper>
    )
}

export default HeroImage