import { useEffect, useRef } from "react";
import "./chalkboard.css";

import MessageLine from "./MessageLine";
import InputBar from "./InputBar";
import Hourglass from "./Hourglass";

export default function Chalkboard({
    messages = [],
    input = "",
    setInput = () => {},
    sendMessage = () => {},
    loading = false
}) {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chalkboard">
            <main className="chat-wrapper">
                {/* Chat messages */}
                <div className="chat-container" ref={chatContainerRef}>
                    {messages.length === 0 && (
                        <div className="intro-message">
                            Hello! Ask me anything about history.
                        </div>
                    )}

                    {messages.map((m, i) => (
                        <MessageLine key={m.id ?? i} user={m?.user ?? ""} bot={m?.bot ?? ""} />
                    ))}
                </div>

                {/* Hourglass animation (used when the chatbot is thinking) */}
                {loading && <Hourglass />}

                <div className="input-bar-wrapper">
                    {/* Decorative elements */}
                    <div className="globe"></div>
                    <div className="chalk"></div>

                    <InputBar
                        input={input}
                        setInput={setInput}
                        sendMessage={sendMessage}
                        loading={loading}
                    />
                </div>
            </main>
        </div>
    );
}