# @lagunaisw/use-split-in-chunks

> a custom React hook that split an array in chunks

[![NPM](https://img.shields.io/npm/v/@lagunaisw/use-split-in-chunks.svg)](https://www.npmjs.com/package/@lagunaisw/use-split-in-chunks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lagunaisw/use-split-in-chunks
```

## Usage

```tsx
import React from "react";

import { useSplitInChunks } from "@lagunaisw/use-split-in-chunks";

const App = () => {
  const names = ["Ted", "Tracy", "Marshal", "Lily", "Barney", "Robin"];
  const { chunks, setSize } = useSplitInChunks(names, 2);

  const handleMinus = () => {
    setSize(prev => prev - 1);
  };

  const handlePlus = () => {
    setSize(prev => prev + 1);
  };

  return (
    <div>
      <div>
        <p>Change size:</p>
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}>+</button>
      </div>
      {chunks.map((chunk, index) => (
        <ul key={index}>
          {chunk.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export default App;
```

## License

MIT © [lagunaisw](https://github.com/lagunaisw)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
