// import classes from './Header.module.scss'
import { HeaderContainer, HeaderNavLink, HeaderStyle } from './Header.styled'

export const Header = () => {
    return (
        <HeaderStyle>
            <HeaderContainer>
                <HeaderNavLink to="/"  >ToDo</HeaderNavLink>
                <HeaderNavLink to="/list" >List</HeaderNavLink>
            </HeaderContainer>
        </HeaderStyle>
    )
}
