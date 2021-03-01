import { createContext, useCallback, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}


interface ChallengensProviderProps{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengensProviderProps){
  const[level , setLevel] = useState(1);
  const[currentExperience , setCurrentExperience] = useState(0);
  const[challengesCompleted , setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  },[])

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }
  
  return(
    <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, experienceToNextLevel, levelUp, startNewChallenge, activeChallenge, resetChallenge }}>
    {children}
    </ChallengesContext.Provider>
  );
}