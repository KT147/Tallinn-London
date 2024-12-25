import {useRef, useState} from 'react'

function Leht() {
    const inputisLugeja = useRef ();
    const [muutuvHTMLs, funktsiooniMuutujaMuutmiseks] = useState ();

    const onClickFunktsioon = () => {
        funktsiooniMuutujaMuutmiseks(inputisLugeja.current.value);
    }

  return (
    <div className='center'>
        <input ref={inputisLugeja} type="text"/>
        <button onClick={onClickFunktsioon}>Muuda</button>
        <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Leht