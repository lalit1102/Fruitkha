import { useState, useEffect } from "react";

const RotatingText = ({ texts, rotationInterval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className="fw-bold text-success">
      {texts[index]}
    </span>
  );
};

export default RotatingText;