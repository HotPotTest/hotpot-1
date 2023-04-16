import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-white text-center' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;