import './App.css';
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        document.title = 'Nothing here!';
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="spin">Nothing here!</h1>
            </header>
        </div>
    );
}

export default App;
