import {  useState } from 'react'
import './text input.css'

function InputSection({
    isTextFocused: setIsTextFocused,
    musicValue: setMusicValue,
    saggutions
  }) {
    const [inputValue, setInputValue] = useState('')
    let [isInputValid,setIsInputValid]=useState(false)
    function submit() {
      setMusicValue(inputValue)
      for(let i of saggutions){
        if(i.name==inputValue){
          setIsInputValid(false)
          break
        }
        setIsInputValid(true)
      }
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
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7423 5.55277L0.742296 0.0527659C0.656081 0.00964924 0.559241 -0.00762668 0.463435 0.00301839C0.367629 0.0136635 0.276943 0.0517756 0.202296 0.112766C0.131008 0.172512 0.077799 0.250959 0.0486505 0.339288C0.0195021 0.427616 0.0155698 0.522325 0.0372958 0.612766L1.44387 5.73059C1.49191 5.90541 1.49153 6.09001 1.44275 6.26463L0.0172959 11.3678C-0.0030909 11.4433 -0.00547067 11.5226 0.010348 11.5992C0.0261667 11.6758 0.0597424 11.7476 0.108375 11.8089C0.157008 11.8702 0.219341 11.9192 0.290363 11.952C0.361384 11.9848 0.439112 12.0005 0.517296 11.9978C0.595567 11.9973 0.672635 11.9785 0.742296 11.9428L11.7423 6.44277C11.8242 6.40081 11.8929 6.33706 11.9409 6.25854C11.9889 6.18003 12.0143 6.08979 12.0143 5.99777C12.0143 5.90574 11.9889 5.8155 11.9409 5.73699C11.8929 5.65847 11.8242 5.59472 11.7423 5.55277ZM1.2923 10.5528L2.3973 6.49777H6.5173C6.79344 6.49777 7.0173 6.27391 7.0173 5.99777C7.0173 5.72162 6.79344 5.49777 6.5173 5.49777H2.3973L1.2923 1.44277L10.3973 5.99777L1.2923 10.5528Z" fill="white"/>
            </svg>

          </button>
        </div>
        <p className="hi-alert" style={{ display: isInputValid ? 'flex' : 'none' }}>
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
    )
  }
export default InputSection