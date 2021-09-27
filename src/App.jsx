import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import FinanceProvider from './provider/FinenceProvider'

export default () => {

    return(
        <BrowserRouter>
            <Link to='/'> Home </Link>
            <Link to='/add'> Add </Link>
            <Switch>
                <FinanceProvider>
                    <Route exact path='/' component={ Home } />
                    <Route path='/add' component={ Add } />
                    <Route path='/edit/:uuid' component={ Edit } />
                </FinanceProvider>
            </Switch>
        </BrowserRouter>
    )
}