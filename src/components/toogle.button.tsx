import { useState } from "react"

export function ToggleButton() {
  const [active, setActive] = useState(false)

  function toggle() {
    setActive((prev) => !prev)
  }

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pointer ${active ? 'bg-green-500 hover:bg-green-700' : ''}`}
      onClick={toggle}
    >
      {active ? 'ON' : 'OFF'}
    </button>
  )
}