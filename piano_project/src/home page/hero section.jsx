import './hero section.css'
function HeroSection (){
    return(
        <>
            <div className="hero-section">
                <div className='hs-piano-container'>
                    <div className='hs-white-buttons-container'>

                        <button className='piano-button' 
                        style={{ transform: 'rotate(-2deg)' }}
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'498px'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'520px',transform: 'rotate(-1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'517px',transform: 'rotate(-1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'530px',transform: 'rotate(-1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'511px',transform: 'rotate(-1deg)'}}>

                        </button>
                        <button className='piano-button'
                        style={{height:'531px',transform: 'rotate(1deg)'}}>

                        </button>
                    </div>
                    <div className='hs-black-keys-container'>
                    <div className='hs-three-black-keys-container'>
                            <button className='black-key'>

                            </button>
                            <button className='black-key'>

                            </button>
                        </div>
                        <div className='hs-three-black-keys-container'>
                            <button className='black-key'>

                            </button>
                            <button className='black-key'>

                            </button>
                            <button className='black-key'>

                            </button>
                        </div>
                        <div className='hs-three-black-keys-container'>
                            <button className='black-key'>

                            </button>
                           
                        </div>
                    </div>
                </div>
                <div className="hs-letters-container">
                    <p className='hs-letter'>A</p>
                    <p className='hs-letter'>S</p>
                    <p className='hs-letter'>D</p>
                    <p className='hs-letter'>F</p>
                    <p className='hs-letter'>G</p>
                    <p className='hs-letter'>H</p>
                    <p className='hs-letter'>J</p>
                    <p className='hs-letter'>K</p>
                    <p className='hs-letter'>L</p>
                </div>
            </div>
        </>
    )
}
export default HeroSection