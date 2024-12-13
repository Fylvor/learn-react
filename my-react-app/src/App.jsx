import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyComponent from './MyComponent';

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function App() {
    return (
        <div>
            <h1>Welcome to My React App!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <MyComponent />
        </div>
    );
}

export default App;
