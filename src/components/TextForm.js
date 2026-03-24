import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!","success");
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!!!","success");
    }

    // ✅ Better word count (ignores extra spaces)
    const words = text.trim().split(/\s+/).filter((el) => el.length !== 0);

    return (
        <>
            <div 
                className='container' 
                style={{
                    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}
            >
                <h1 className="container my-3">{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="12"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                    />
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
                    Uppercase
                </button>

                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
                    Lowercase
                </button>

                <button className="btn btn-primary mx-2" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>

            <div 
                className="container my-4" 
                style={{
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}
            >
                <h1>Your text summary</h1>

                <p>{words.length} words and {text.length} characters</p>

                <p>Minutes Required to read: {(0.008 * words.length).toFixed(2)}</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}