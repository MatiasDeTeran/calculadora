import './Calculadora.css'
import { useState } from 'react'

export const Calculadora = () => {

    const [number, setNumber] = useState(0);

    function volverCero(){
        setNumber(0);
    }

    function sumar(){
        
    }



    return(
        <div className='divGeneral'>

            <div className="calculadora">
                <div className='number'>
                    <h1>123,456,789</h1>
                </div>
                <div className='divButtons'>
                    <div className='subDivButtons'>
                        <button className='buttonGrisClaro'>c</button>
                        <button className='buttonGrisClaro'>+/-</button>
                        <button className='buttonGrisClaro'>%</button>
                        <button className='buttonOrange'>÷</button>
                    </div>

                    <div className='subDivButtons'>
                        <button className='buttonGrisOscuro'>7</button>
                        <button className='buttonGrisOscuro'>8</button>
                        <button className='buttonGrisOscuro'>9</button>
                        <button className='buttonOrange'>x</button>
                    </div>

                    <div className='subDivButtons'>
                        <button className='buttonGrisOscuro'>4</button>
                        <button className='buttonGrisOscuro'>5</button>
                        <button className='buttonGrisOscuro'>6</button>
                        <button className='buttonOrange'>-</button>
                    </div>

                    <div className='subDivButtons'>
                        <button className='buttonGrisOscuro'>1</button>
                        <button className='buttonGrisOscuro'>2</button>
                        <button className='buttonGrisOscuro'>3</button>
                        <button className='buttonOrange'>+</button>
                    </div>

                    <div className='subDivButtonsZero1'>
                        <button className='zeroButton'>0</button>
                        <div className='subDivButtonsZero2'>
                            <button className='buttonGrisOscuro'>.</button>
                            <button className='buttonOrange'>=</button>
                        </div>    
                    </div>
                </div>                
            </div>
        </div>
    )
}