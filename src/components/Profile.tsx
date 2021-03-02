import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){

  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/72166805?s=400&u=b6eec1e6d8d730dfcd2bb7bfef44935879ce7f16&v=4" alt="Pedro Correia"></img>
      <div>
        <strong>Pedro Correia</strong>
        <p>
          <img src="icons/level.svg" alt="levelUp"></img>
          Level {level}
          </p>
      </div>
    </div>
  )
}