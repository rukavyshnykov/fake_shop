import { Outlet, useNavigate } from "react-router-dom"
import cl from './Layout.module.scss'
import logo from '../../assets/logo.png'
import { useGetProductsQuery } from "../../services/productsApi"

export const Layout = () => {
    const navigate = useNavigate()
    const {isLoading, isFetching, isError} = useGetProductsQuery()

    if(isLoading || isFetching) {
        return <>Loading...</>
    }

    if(isError) {
        <>Oops! Something went wrong</>
    }

    return (
        <div className={cl.root}>
            <header>
                <div className={cl.logo}>
                    <img src={logo}/>
                </div>
            </header>
            <nav className={cl.nav}>
                <button type="button" onClick={() => navigate('/')}>Home</button>
                <button type="button" onClick={() => navigate('/products')}>Products</button>
                <button type="button" onClick={() => navigate('/cart')}>Cart</button>
            </nav>
            <main className={cl.main}>
                <Outlet />
            </main>
            <footer className={cl.footer}>
                FOOTER
            </footer>
        </div>
    )
}