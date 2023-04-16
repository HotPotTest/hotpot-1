import React from 'react';

const Result = ({ showResult, quizs, marks, handleClose }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-70 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 2 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 2 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 2}</h3>

                            <button onClick={handleClose} className='btn py-2 px-4 btn-light fw-bold d-inline'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;