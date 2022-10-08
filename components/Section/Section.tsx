import React from "react";

interface SectionProps {
    header?: string,
    subHeader?: string,
    typesOf?: any[],
    children?: React.ReactNode
}

interface TypesOf {
    course?: string,
    description?: string
}

export const Section = (props: SectionProps) => {

    const data = props.typesOf
    return (
        <>
            <h1>{props.header}</h1>
            {data?.map((object, index) => {
                if(typeof object === 'string'){
                    return(
                        <div key={index}>{object}
                        </div>
                    )
                }
                return (
                    <div key={index}>{object.course}:
                        {object.description}
                    </div>
                )
            })}
            {props.children && <>{props.children}</>}
        </>
    )
}
