import React, { useState } from 'react'

export default function About() {

    const [mode, setMode] = useState('light')

    const myStyle = {
        color: mode === 'light' ? 'black' : 'white',
        backgroundColor: mode === 'light' ? 'white' : 'black',
        border: mode === 'light' ? '2px solid black' : '2px solid white'
    }

    const toggleStyle = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='container p-3' style={myStyle}>
            <h1 className='my-3'>About Me</h1>

            <div className="accordion" id="accordionExample">

                {/* Item 1 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button"
                            style={{
                                backgroundColor: myStyle.backgroundColor,
                                color: myStyle.color
                            }}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne"
                        >
                            Who Am I?
                        </button>
                    </h2>
                    <div 
                        id="collapseOne" 
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            I am a student currently pursuing my graduation from an Indian Institute of Technology (IIT).
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed"
                            style={{
                                backgroundColor: myStyle.backgroundColor,
                                color: myStyle.color
                            }}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo"
                        >
                            Academic Background
                        </button>
                    </h2>
                    <div 
                        id="collapseTwo" 
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            I am building a strong foundation in engineering, problem-solving, and analytical thinking through my coursework and projects.
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed"
                            style={{
                                backgroundColor: myStyle.backgroundColor,
                                color: myStyle.color
                            }}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree"
                        >
                            Goals
                        </button>
                    </h2>
                    <div 
                        id="collapseThree" 
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            I aim to apply my knowledge to real-world problems and grow into a skilled professional in the tech and engineering domain.
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed"
                            style={{
                                backgroundColor: myStyle.backgroundColor,
                                color: myStyle.color
                            }}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFour"
                        >
                            Text Utility Features
                        </button>
                    </h2>
                    <div 
                        id="collapseFour" 
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <ul>
                                <li><b>Uppercase:</b> Converts all text into capital letters.</li>
                                <li><b>Lowercase:</b> Converts all text into small letters.</li>
                                <li><b>Copy:</b> Copies the current text to clipboard.</li>
                                <li><b>Rectify Text:</b> Removes extra spaces and capitalizes sentences after full stops.</li>
                                <li><b>Sentence Case:</b> Capitalizes first letter of each sentence (. ! ? supported).</li>
                                <li><b>Remove Punctuation:</b> Removes symbols like ., !, ?, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Toggle Button */}
            <div className='my-3'>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={toggleStyle}
                >
                    {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                </button>
            </div>
        </div>
    )
}
