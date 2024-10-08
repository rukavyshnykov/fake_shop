import { Provider } from 'react-redux'
import './App.css'
import { Router } from './router'
import { store } from './store/store'

export const App = () => {

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
