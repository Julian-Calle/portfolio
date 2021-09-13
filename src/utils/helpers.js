import emailjs from "emailjs-com";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;

export function typeText(text, setterText, counter, setterCounter) {
  if (counter <= text.length) {
    setterText(text.slice(0, counter));
    setterCounter((counter += 1));
    setTimeout(() => {
      typeText(text, setterText, counter, setterCounter);
    }, 150);
  }
}

export async function sendMail(from, subject, body) {
  console.log(from, subject, body);
}

export function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      e.target,
      REACT_APP_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
