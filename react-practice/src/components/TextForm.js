import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
       let newText=text.toUpperCase()
       setText(newText)
    }

    const hndleOnChange = (event) => {
        console.log("hjj")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text here!!")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} id="mybox" rows="6" onChange={hndleOnChange}>{props.heading}</textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
