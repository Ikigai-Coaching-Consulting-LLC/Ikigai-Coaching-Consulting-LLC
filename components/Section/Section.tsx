import React from "react";

interface SectionProps {
    header?: string,
    subHeader?: string,
    typesOfCourses?: TypesOf[],
    typesOfWorkshops?: string[],
    children?: React.ReactNode
}

interface TypesOf {
    course?: string,
    description?: string
}

export const Section = (props: SectionProps) => {
    return (
        <>
            <h1>{props.header}</h1>
            {props.typesOfCourses?.map((object, index) => {
                return (
                    <div key={index}>{object.course}:
                        {object.description}
                    </div>
                )
            })}
            {props.typesOfWorkshops?.map((workshop, index) => {
                return <div key={index}>{workshop}</div>
            })}
            {props.children && <>{props.children}</>}
        </>
    )
}
