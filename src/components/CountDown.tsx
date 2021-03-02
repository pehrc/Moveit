import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'
import {CountdownContext} from '../contexts/CountdownContex'

export function CountDown () {
  const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2 , '0').split('');  // o splite divide, ou seja * 25 = '2' '5'  && o padStart verifica se a string contém 2 caracteres, se nao, preencher a esquera com '0'
  const [secondLeft, secondRight] = String(seconds).padStart(2 , '0').split('');

  return(
    <div>
    <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div> 
    </div>

    { hasFinished ?(
      <button disabled className={styles.countdownButton}>
      Ciclo encerrado
    </button>
    ):(
        <>
        {isActive ?
          (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo
            </button>
          ):(
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
              Iniciar ciclo 
            </button>
          )
        }
        </> 
      ) 
    } 
         
    </div>
  )
}