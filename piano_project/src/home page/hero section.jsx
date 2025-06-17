import './hero section.css'
function HeroSection (){
    let key1=`Sequence-02.mp3`
    let key2=`Sequence 03.mp3`
    let key3=`Sequence 04.mp3`
    let key4=`Sequence 05.mp3`
    let key5=`Sequence 06.mp3`
    let key6=`Sequence 07.mp3`
    let key7=`Sequence 08.mp3`
    let key8=`Sequence 09.mp3`
    let key9=`Sequence 010.mp3`
    let key10=`Sequence 011.mp3`

    let playkey = (key) => {
    const audio = new Audio(`piano_project/public/notes-sounds/${key}`); 
        console.log(audio)
    audio.onerror = () => console.error("Failed to load:\n", key);
    audio.play().catch(err => console.error("Playback error:", err));

    audio.currentTime = 0;
    audio.play();
    };
    return(
        <>
            <div className="hero-section">
                <div className='hs-piano-container'>
                    <div className='hs-white-buttons-container'>

                    <button 
                    className='piano-button'
                    style={{ transform: 'rotate(-2deg)' }}
                    onClick={() => playkey(key1)} // wrap it in an arrow function!
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