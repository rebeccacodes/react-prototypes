import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function greeting(obj) {
    return (
        <div className="container">
            <h1>Welcome {obj.name} </h1>
            <h2 className="text-muted"> {obj.luckyNumber} </h2>
        </div>
    );

}

var user = {
    name: 'Bob',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
