import { Link } from "react-router-dom";
// import "../assets/scss/style.scss";
import { Actions, Content, Link404, Message, Subtitle, Title } from "./404Styled";

export const NotFound = () => {
    return (
        <div className="container">
            <Content>
                <Title>404</Title>
                <Message>Страница не найдена</Message>
                <Subtitle>К сожалению, запрашиваемая вами страница не существует</Subtitle>
                <Actions>
                    <Link404 to="/" className="not-found-link">ToDo</Link404>
                    <Link404 to="/" className="not-found-link">List</Link404>
                </Actions>
            </Content>
        </div>
    )
}