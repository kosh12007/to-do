// import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { HeaderContainer, HeaderNavLink, HeaderStyle, ToggleButton } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
    const dispatch = useDispatch()

    return (
        <HeaderStyle>
            <HeaderContainer>
                <HeaderNavLink to="/"  >ToDo</HeaderNavLink>
                <HeaderNavLink to="/list" >List</HeaderNavLink>
                <ToggleButton>
                    <button onClick={() => dispatch(toggleThemeAction())}>
                     toggle   
                    </button>
                </ToggleButton>
            </HeaderContainer>
        </HeaderStyle>
    )
}
