document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chat-input");
  const button = document.getElementById("chat-send");
  const responseBox = document.getElementById("chat-response");

  button.addEventListener("click", () => {
    const question = input.value.trim().toLowerCase();
    const response = getResponse(question);
    responseBox.textContent = response;
    input.value = "";
  });
});

function getResponse(question) {
  // Español
  if (question.includes("hola") || question.includes("buenas")) {
    return "¡Hola! Soy un asistente diseñado por Valera25. ¿En qué puedo ayudarte?";
  }
  if (question.includes("quién eres") || question.includes("eres")) {
    return "Soy un chatbot creado por J. Valera como demostración de desarrollo web.";
  }
  if (question.includes("contacto") || question.includes("correo")) {
    return "Puedes escribirle a: valera25@gmail.com";
  }

  // English
  if (question.includes("hello") || question.includes("hi")) {
    return "Hello! I’m a personal assistant bot made by Valera25. How can I help?";
  }
  if (question.includes("who are you")) {
    return "I’m a chatbot designed by J. Valera as a demo of web development skills.";
  }
  if (question.includes("email") || question.includes("contact")) {
    return "You can reach out to: valera25@gmail.com";
  }

  return "Lo siento, no entiendo tu pregunta todavía. | Sorry, I don't understand your question yet.";
}
