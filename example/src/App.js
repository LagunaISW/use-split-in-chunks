import React from 'react'

import { useMyHook } from '@lagunaisw/use-split-in-chunks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
