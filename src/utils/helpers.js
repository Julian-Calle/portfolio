export default function typeText(text, setterText, counter, setterCounter) {
  if (counter <= text.length) {
    setterText(text.slice(0, counter));
    setterCounter((counter += 1));
    setTimeout(() => {
      typeText(text, setterText, counter, setterCounter);
    }, 150);
  }
}
