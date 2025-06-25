import { useState } from 'react';
import introLogo from '../assets/images/introLogo.svg';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='introSec'>
      <img src={introLogo} alt="" />
      <p>You don’t have selected any service yet!</p>
    </div>
  )
}

export default Home

