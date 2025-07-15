import { useEffect, useState } from 'react'
import './text input.css'

function InputSection({
    isTextFocused: setIsTextFocused,
    musicValue: setMusicValue,
    musicalSaggutions: setDownloadedMusic,
    saggutions
  }) {
    const [inputValue, setInputValue] = useState('')
    function submit() {
      setMusicValue(inputValue)
    }
    // console.log(saggutions)
    return (
      <div className="home-input-section">
        <div className="text-container">
          <h1>Type the name of the music</h1>
          <h4>and AI will help you play it on the piano</h4>
        </div>
        <div className="input-container">
          <input
            onFocus={() => setIsTextFocused(true)}
            onBlur={() => setIsTextFocused(false)}
            className="input-text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
  
          <button className="hi-submit" onClick={submit}>
            {/* Your SVG here */}
            Submit
          </button>
        </div>
  
        <p className="hi-alert" style={{ display: inputValue ? 'flex' : 'none' }}>
          This feature does not work yet :(
        </p>
  
        <div className="hi-multi-choices-container">
          {saggutions.map((item, index) => (
            <button
              key={index}
              className="multi-choices-button"
              onClick={() => setInputValue(item.name)}
            >
              <p className="multi-choices-text">{item.name}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }
export default InputSection