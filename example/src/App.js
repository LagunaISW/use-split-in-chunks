import React from 'react'

import { useSplitInChunks } from '@lagunaisw/use-split-in-chunks'

const App = () => {
  const chunks = useSplitInChunks(["Ted", "Tracy", "Marshal", "Lily", "Barney", "Robin"], 1)
  return (
    <div>
      {chunks.map((chunk, index) => (
        <ul key={index}> 
          {chunk.map((item, index) => (
            <li key={index}>{item}</li>)
          )}
        </ul>)
      )}
    </div>
  )
}
export default App
