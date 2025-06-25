import { useState } from 'react';

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <div className='dashFooter'>
      <p>© 2025 NGS Admin All rights reserved.</p>
    </div>
  )
}

export default Footer

