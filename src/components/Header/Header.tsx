import classes from './Header.module.scss'

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a href="/" className={classes.linc} >ToDo</a>
            </div>
        </header>
    )
}
