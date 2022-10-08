
import { Wrapper, Image } from './HeroImage.styles'

export interface HeroImageProps {
    background?: string
}

const HeroImage = (props:HeroImageProps) => {
    return (
        <Wrapper background={props.background}>
            
        </Wrapper>
    )
}

export default HeroImage