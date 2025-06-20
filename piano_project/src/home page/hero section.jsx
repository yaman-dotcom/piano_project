    import './hero section.css'
    function HeroSection (){
        const audioCache = {
    'Sequence_02.mp3': new Audio('/notes-sounds/Sequence_02.mp3'),
    'Sequence 03.mp3': new Audio('/notes-sounds/Sequence 03.mp3'),
    'Sequence 04.mp3': new Audio('/notes-sounds/Sequence 04.mp3'),
    'Sequence 05.mp3': new Audio('/notes-sounds/Sequence 05.mp3'),
    'Sequence 06.mp3': new Audio('/notes-sounds/Sequence 06.mp3'),
    'Sequence 07.mp3': new Audio('/notes-sounds/Sequence 07.mp3'),
    'Sequence 08.mp3': new Audio('/notes-sounds/Sequence 08.mp3'),
    'Sequence 09.mp3': new Audio('/notes-sounds/Sequence 09.mp3'),
    'Sequence 10.mp3': new Audio('/notes-sounds/Sequence 10.mp3'),
    'Sequence 011.mp3': new Audio('/notes-sounds/Sequence 11.mp3'),
    };
    Object.values(audioCache).forEach((e)=>e.load())

    const playkey = (key) => {
        const audio = audioCache[key];  
        audio.currentTime = 0;
        audio.play();
        
    };
    document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
        playkey('Sequence_02.mp3');
        document.getElementById('button-A').click();
        break;
        case 's':
        playkey('Sequence 03.mp3');
        document.getElementById('button-S').click();
        break;
        case 'd':
        playkey('Sequence 04.mp3');
        document.getElementById('button-D').click();
        break;
        case 'f':
        playkey('Sequence 05.mp3');
        document.getElementById('button-F').click();
        break;
        case 'g':
        playkey('Sequence 06.mp3');
        document.getElementById('button-G').click();
        break;
        case 'h':
        playkey('Sequence 07.mp3');
        document.getElementById('button-H').click();
        break;
        case 'j':
        playkey('Sequence 08.mp3');
        document.getElementById('button-J').click();
        break;
        case 'k':
        playkey('Sequence 09.mp3'); // Same as 'j'—intentional?
        document.getElementById('button-K').click();
        break;
        case 'l':
        playkey('Sequence 10.mp3');
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
                        onClick={() => playkey('Sequence_02.mp3')} 
                        id='button-A'
                        >
                        </button>

                        
                        <button className='piano-button'
                        style={{height:'498px'}}
                        onClick={() => playkey('Sequence 03.mp3')} 
                        id='button-S'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'520px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey('Sequence 04.mp3')} 
                        id='button-D'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey('Sequence 05.mp3')} 
                        id='button-F'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'517px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey('Sequence 06.mp3')} 
                        id='button-G'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'504px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey('Sequence 07.mp3')} 
                        id='button-H'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'530px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey('Sequence 08.mp3')} 
                        id='button-J'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'511px',transform: 'rotate(-1deg)'}}
                        onClick={() => playkey('Sequence 09.mp3')} 
                        id='button-K'
                        >

                        </button>
                        <button className='piano-button'
                        style={{height:'531px',transform: 'rotate(1deg)'}}
                        onClick={() => playkey('Sequence 10.mp3')} 
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
export default HeroSection