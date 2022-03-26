import React from 'react';
import './QA.css';

const QA = () => {
    return (
        <div>
            <div className='qa'>
                <h2>How does react work?</h2>
                <p>React is a popular JavaScript library. React can effectively recreate the DOM in JS and only pushes the changes that have actually occurred to the DOM. React uses JSX which allows us to code in HTML but it is not actual HTML which creates a javascript object. ReactDOM creates nodes depending on the objects type property and appends the nodes to the DOM. React uses a VirtualDOM which is a copy of DOM and it is used to find the difference between the virtualDOM and the real DOM so that react makes only the least amount of changes possible. Diffing algorithm is used for this purpose. Keys are used in react to avoid unnecessary re-renders. </p>
            </div>
            <div className='qa'>
                <h2>Difference between Props and State</h2>
                <p>	1. Props are immutable but states are mutable. <br />
                    2. Props can be passed from parent components to child components. States are defined in the component. <br />
                    3. State can't be accessed or modified outside of the component where props can be used in child components. <br />
                    4. Props are descriptions of what we should see. States hold information that determines the output of a component. <br />
                    5. Props are read-only. The changes of the state can be asynchronous. </p>
            </div>
        </div>
    );
};

export default QA;