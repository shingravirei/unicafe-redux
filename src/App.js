import React from 'react';

const App = ({ store }) => {
    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <button
                    onClick={() => {
                        store.dispatch({ type: 'GOOD' });
                    }}
                >
                    good
                </button>
                <button
                    onClick={() => {
                        store.dispatch({ type: 'OK' });
                    }}
                >
                    neutral
                </button>
                <button
                    onClick={() => {
                        store.dispatch({ type: 'BAD' });
                    }}
                >
                    bad
                </button>
            </div>

            <h2>Statistics</h2>
            <p>Good {store.getState().good}</p>
            <p>Neutral {store.getState().ok}</p>
            <p>Bad {store.getState().bad}</p>
        </div>
    );
};

export default App;
