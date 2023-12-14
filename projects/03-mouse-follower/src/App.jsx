import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
 
  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handlemove',{clientX, clientY})
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5',
        border:'1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,

      }} />
      <button onClick={() => setEnabled(!enabled)}>{enabled ? "Desactivar" : "Activar"} seguir elemento</button>
    </main>
  )
}

export default App
