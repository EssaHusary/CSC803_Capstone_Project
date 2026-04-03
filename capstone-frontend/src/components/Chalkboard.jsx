import "./chalkboard.css";

import MessageLine from "./MessageLine";
import InputBar from "./InputBar";
import Hourglass from "./Hourglass";

export default function Chalkboard({
    messages = [],
    input = "",
    setInput = () => {},
    sendMessage = () => {}
}) {
    return (
        <div className="chalkboard">
            <main className="chat-wrapper">
                {/* Chat messages */}
                <div className="chat-container">
                    {messages.length === 0 && (
                        <div className="intro-message">
                            Hello! Ask me anything about history.
                        </div>
                    )}

                    {messages.map((m, i) =>(
                        <MessageLine key={i} user={m?.user ?? ""} bot={m?.bot ?? ""} />
                    ))}
                </div>

                {/* Hourglass animation (used when the chatbot is thinking) */}
                <Hourglass />

                <div className="input-bar-wrapper">
                    {/* Decorative elements */}
                    <div className="globe"></div>
                    <div className="chalk"></div>

                    <InputBar
                        input={input}
                        setInput={setInput}
                        sendMessage={sendMessage}
                    />
                </div>
            </main>
        </div>
    );
}