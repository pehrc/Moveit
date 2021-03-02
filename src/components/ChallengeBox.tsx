import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenger } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded(){
    completeChallenger();
    resetCountdown();
  }
  function handleChallengeFalied(){
    resetChallenge();
    resetCountdown();
  }

  return(
    <div className={styles.challengeContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFalied}> Falhei </button>
            <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}> Completei </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level UP"/>
          Avance de level completando desafios
        </p>
      </div>
      ) }
    </div>
  )
}