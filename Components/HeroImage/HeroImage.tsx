
import { Wrapper, Title } from './HeroImage.styles'

export interface HeroImageProps {
    background?: string
    title?: string
}

const HeroImage = (props:HeroImageProps) => {
    return (
        <Wrapper background={props.background}>
            <Title>{props.title}</Title>
        </Wrapper>
    )
}

export default HeroImage