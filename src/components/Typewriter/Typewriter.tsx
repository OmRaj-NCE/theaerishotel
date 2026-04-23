import { useEffect, useState } from "react";

const text = "Celebrate Every Moment With Elegance";

const Typewriter = () => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <h1>{display}|</h1>;
};

export default Typewriter;