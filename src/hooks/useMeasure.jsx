import { useState, useRef, useEffect } from "react";

export const useMeasure = () => {
  const ref = useRef();

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // resizeO = resize observer
  const [resizeO] = useState(
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect))
  );

  useEffect(() => {
    // if the ref we're looking at exists, we can run resize observer.observe and pass in current ref
    if (ref.current) {
      resizeO.observe(ref.current);
    }
    //cleanup by returning the disconnect method
    return () => {
      return resizeO.disconnect();
    };
  }, [resizeO]); //if resizeO is updating, we want to run this useEffect

  return [{ ref }, bounds];
};
