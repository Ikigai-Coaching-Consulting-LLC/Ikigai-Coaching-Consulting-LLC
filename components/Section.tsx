import React from "react";

interface Placeholder {
    name: string;
    age: number;
}

export default function Section( prop: Placeholder ) {
    return <h1>Section component</h1>
}
