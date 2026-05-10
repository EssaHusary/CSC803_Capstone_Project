import hourglass from '../assets/svg/hourglass.svg';
import './chalkboard.css'

export default function Hourglass() {
    return (
        <div className="hourglass-wrapper">
            <img src={hourglass} className="thinking-icon" alt="Thinking..." />

            <div className="stars">
                <span>★</span>
                <span>☆</span>
                <span>✦</span>
                <span>✧</span>
            </div>
        </div>
    );
}