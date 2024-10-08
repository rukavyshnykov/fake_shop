import { Outlet } from "react-router-dom"
import cl from './Layout.module.scss'

export const Layout = () => {
    return (
        <>
            <header>
                asd
            </header>
            <nav>

            </nav>
            <main className={cl.main}>
                <Outlet />
            </main>
            <footer>
                asd
            </footer>
        </>
    )
}