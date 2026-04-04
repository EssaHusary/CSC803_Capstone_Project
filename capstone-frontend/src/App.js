// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Chalkboard from "./components/Chalkboard";

const BACKEND_URL = "https://chatbot2.loca.lt/chat";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const messageId = Date.now();
    const userMessage = { id: messageId, user: input, bot: "" };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      const botText = data?.reply || "I couldn't get a response. Please try again.";

      setMessages((prev) =>
        prev.map((m) =>
          m.id === messageId ? { ...m, bot: botText } : m
        )
      );
    } catch (error) {
      console.error("sendMessage error", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === messageId
            ? { ...m, bot: "Error sending message. Check connection." }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Chalkboard
      messages={messages}
      input={input}
      setInput={setInput}
      sendMessage={sendMessage}
      loading={loading}
    />
  );
  // const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([]);

  // const sendMessage = async () => {
  //   const response = await fetch(
  //     BACKEND_URL,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type":
  //           "application/json"
  //       },
  //       body: JSON.stringify({
  //         text: input
  //       })
  //     }
  //   );

  //   const data =
  //     await response.json();

  //   setMessages([
  //     ...messages,
  //     {
  //       user: input,
  //       bot: data.reply
  //     }
  //   ]);

  //   setInput("");
  // };

  // return (
  //   <div>
  //     <h1>Chatbot</h1>

  //     {messages.map((m, i) => (
  //       <div key={i}>
  //         <b>You:</b> {m.user}
  //         <br />
  //         <b>Bot:</b> {m.bot}
  //       </div>
  //     ))}

  //     <input
  //       value={input}
  //       onChange={(e) =>
  //         setInput(e.target.value)
  //       }
  //     />

  //     <button onClick={sendMessage}>
  //       Send
  //     </button>
  //   </div>
  // );
}

export default App;