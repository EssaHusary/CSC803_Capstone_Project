import { useEffect, useRef } from "react";
import "./chalkboard.css";

import MessageLine from "./MessageLine";
import InputBar from "./InputBar";

export default function Chalkboard({
    messages = [],
    input = "",
    setInput = () => {},
    sendMessage = () => {},
    loading = false
}) {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const el = chatContainerRef.current;
        if (!el) return;

        requestAnimationFrame(() => {
            el.scrollTo({
                top: el.scrollHeight,
                behavior: "smooth"
            });
        });
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
                        <MessageLine
                            key={m.id ?? i}
                            user={m?.user ?? ""}
                            bot={m?.bot ?? ""}
                            loading={loading && i === messages.length - 1} // only last bubble loads
                        />
                    ))}
                </div>

                <div className="input-bar-wrapper">
                    {/* Decorative elements */}
                    <div className="globe"></div>
                    <div className="apple"></div>
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