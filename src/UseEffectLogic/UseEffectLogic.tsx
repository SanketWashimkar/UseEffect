import { useState, useEffect } from "react";

const UseEffectLogic = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "React Functions";
    
  });

  return (
    <div>
      <p>you Click {count} times </p>
      <button onClick={() => setCount(count + 1)}> Click Me </button>
    </div>
  );
};

export default UseEffectLogic;
