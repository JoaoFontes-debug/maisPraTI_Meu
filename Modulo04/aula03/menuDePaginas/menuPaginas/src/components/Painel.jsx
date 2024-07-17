import React from "react";
import painel from './Painel.module.css'


export function WhyReact(){ 

    return(
            <ul className={painel.whyReact}>
                <li>React is extremely popular</li>
                <li>It makes building complex, interactive UIs a breeze</li>
                <li>It's powerful & flexible</li>
                <li>It has a very active and versatile ecosystem</li>
            </ul>
    )
}

export function CoreFeatures(){
    return(
        <ul className={painel.coreFeatures}>
                <li>Components, JSX & Props</li>
                <li>State</li>
                <li>Hooks (e.g., useEffect())</li>
                <li>Dynamic rendering</li>
        </ul>
    )
}

export function RelatedResources(){
    return(
        <ul className={painel.relatedResources}>
                <li>Official web page (react.dev)</li>
                <li>Next.js (Fullstack framework)</li>
                <li>React Native (build native mobile apps with React)</li>
        </ul>
    )
}

export function ReactVsJs(){
    return(
        <ul className={painel.reactVsJs}>
                <li>Vanilla JavaScript requires imperative programming</li>
                <li>Imperative Programming: You define all the steps needed to achieve a result</li>
                <li>React on the other hand embraces declarative programming</li>
                <li>With React, you define the goal and React figures out how to get there</li>
        </ul>
    )
}

