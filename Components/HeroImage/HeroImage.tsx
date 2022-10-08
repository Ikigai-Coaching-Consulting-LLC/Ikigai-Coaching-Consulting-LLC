
import { Wrapper, Image } from './HeroImage.styles'

export interface HeroImageProps {
    background?: string
    image?: string
}

const HeroImage = (props:HeroImageProps) => {
    return (
        <Wrapper background={props.background}>
            <Image src={props.image} /> ;
        </Wrapper>
    )
}

export default HeroImage