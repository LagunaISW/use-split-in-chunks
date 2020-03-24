import { useState, useEffect } from "react";

export const useSplitInChunks = (array: any[], chunkSize: number) => {
  const [chunks, setChunks] = useState<any[]>([])

  if(chunkSize <= 0){
    throw new Error("chunkSize should be greater than 0")
  }

  useEffect(() => {
    const result = array.reduce((resultArray: any[], item: any, index: number) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
    setChunks(result);
  }, [setChunks])
  

  return chunks;
};