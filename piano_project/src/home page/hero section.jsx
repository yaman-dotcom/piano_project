import './hero section.css'
function HeroSection (){
    let key1=`a.wav`
    let key2=`s.wav`
    let key3=`d.wav`
    let key4=`f.wav`
    let key5=`g.wav`
    let key6=`h.wav`
    let key7=`j.wav`
    let key8=`k.wav`
    let key9=`l.wav`
    let key10=`Sequence 011.mp3`

    let playkey = (key) => {
        const audio = new Audio("/tunes/"+key)       
        console.log(audio);
    

    audio.currentTime = 0;
    audio.play();
    };
    document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
        playkey(key1);
        document.getElementById('button-A').click();
        break;
        case 's':
        playkey(key2);
        document.getElementById('button-S').click();
        break;
        case 'd':
        playkey(key3);
        document.getElementById('button-D').click();
        break;
        case 'f':
        playkey(key4);
        document.getElementById('button-F').click();
        break;
        case 'g':
        playkey(key5);
        document.getElementById('button-G').click();
        break;
        case 'h':
        playkey(key6);
        document.getElementById('button-H').click();
        break;
        case 'j':
        playkey(key7);
        document.getElementById('button-J').click();
        break;
        case 'k':
        playkey(key7); // Same as 'j'—intentional?
        document.getElementById('button-K').click();
        break;
        case 'l':
        playkey(key8);
        document.getElementById('button-L').click();
        break;
    }
    });
    
    return(
        <>
            <div className="hero-section">
                <div className='hs-piano-container'>
                    <div className='hs-white-buttons-container'>

                        <button 
                        className='piano-button'
                        style={{ transform: 'rotate(-2deg)' }}
                        onClick={() => playkey(key1)} // wrap it in an arrow function!
                        id='button-A'
                        >
                        </button>

                        
                        <button className='piano-button'
                        style={{height:'498px'}}
                        onClick={() => playkey(key2)} 
                        id='button-S'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'520px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey(key3)} 
                        id='button-D'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey(key4)} 
                        id='button-F'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'517px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey(key5)} 
                        id='button-G'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey(key6)} 
                        id='button-H'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'530px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey(key7)} 
                        id='button-J'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'511px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey(key8)} 
                        id='button-K'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'531px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey(key9)} 
                        id='button-L'
                        >

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

export default HeroSection;