import { useState, useEffect } from "react";

// export function typeText(text, setterText, counter, setterCounter) {
//     if (counter <= text.length) {
//       setterText(text.slice(0, counter));
//       setterCounter((counter += 1));
//       setTimeout(() => {
//         typeText(text, setterText, counter, setterCounter);
//       }, 150);
//     }
//   }

export default function TypeWriterEffect({ text }) {
  const [typeText, setTypeText] = useState("");
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    typeEffect();
  }, []);

  function typeEffect() {
    if (counter <= text.length) {
      setTypeText(text.slice(0, counter));
      setCounter((counter += 1));
      setTimeout(() => {
        typeEffect();
      }, 150);
    }
  }

  return typeText;
}
