import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import TestPage from './TestPage';

function Article() {
    const {id} = useParams();

    const [testId, setTestId] = useState(id)

    return (
        <div>
            Article page {id}

            <h2>page {<TestPage data={id}/>}</h2>
        </div>
    )
}

export default Article
