import React from 'react';
import Table from './table';

const students = [
    { student: 'reed', course: 'history', grade: 87 }, { student: 'leyla', course: 'science', grade: 93 }, { student: 'doug', course: 'math', grade: 64 }
];

export default () => {
    return <div className="container">

        <div><h1>Student Grade Table</h1></div>

        <Table data={students} />

    </div>
}