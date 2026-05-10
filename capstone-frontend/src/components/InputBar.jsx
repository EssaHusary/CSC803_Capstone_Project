export default function InputBar({ input, setInput, sendMessage, loading = false }) {
    return (
        <div className="input-bar">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                    }
                }}
                placeholder="Type your question"
                disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
                {loading ? "Thinking..." : "Send"}
            </button>
        </div>
    );
}