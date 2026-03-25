import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success");
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!!!", "success");
    }

    const handleRectifyText = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        newText = newText.split('. ').map(sentence => {
            if (sentence.length === 0) return sentence;
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');

        setText(newText);
        props.showAlert("Text rectified!", "success");
    }

    const handleSentenceCase = () => {
        let newText = text.toLowerCase();

        // Capitalize first letter of each sentence (. ! ?)
        newText = newText.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

        setText(newText);
        props.showAlert("Converted to Sentence Case!", "success");
    }

    const handleRemovePunctuation = () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, "");
        setText(newText);
        props.showAlert("Punctuation removed!", "success");
    }

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

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpperCase}>
                    Uppercase
                </button>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerCase}>
                    Lowercase
                </button>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyToClipboard}>
                    Copy
                </button>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRectifyText}>
                    Rectify Text
                </button>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentenceCase}>
                    Sentence Case
                </button>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemovePunctuation}>
                    Remove Punctuation
                </button>
            </div>

            <div
                className="container my-4"
                style={{
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}
            >
                <h1>Your text summary</h1>

                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

                <p>Minutes Required to read: {(0.008 * words.length).toFixed(2)}</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
