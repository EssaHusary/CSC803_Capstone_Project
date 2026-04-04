import Hourglass from "./Hourglass";

export default function MessageLine({ user, bot, loading }) {
    return (
        <div className="message-line">
            <div className="message-user">{user}</div>

            {/* Bot goes into thinking mode before responding */}
            <div className="message-bot">{loading ? <Hourglass /> : bot}</div>
        </div>
    );
}