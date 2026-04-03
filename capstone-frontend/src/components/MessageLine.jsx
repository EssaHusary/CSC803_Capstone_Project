export default function MessageLine({ user, bot }) {
    return (
        <div className="message-line">
            <div className="message-user">{user}</div>
            <div className="message-bot">{bot}</div>
        </div>
    );
}