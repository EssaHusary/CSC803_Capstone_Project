export default function InputBar({ input, setInput, sendMessage }) {
    return (
        <div className="input-bar">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}