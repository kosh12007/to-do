import { Link } from "react-router-dom";
import "../assets/scss/style.scss";

export const NotFound = () => {
    return (
        <div className="container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Страница не найдена</p>
                <p className="not-found-subtitle">К сожалению, запрашиваемая вами страница не существует</p>
                <div className="not-found-actions">
                    <Link to="/" className="not-found-link">Вернуться на главную</Link>
                    <Link to="/todo" className="not-found-link">Список задач</Link>
                </div>
            </div>
        </div>
    )
}