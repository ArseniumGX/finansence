import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'

export default () => {
    

    const [state, setState] = useState([])

    const DataContext = createContext({
        data: [{
            title: 'texte',
            algo: "kalka"
        },
        {
            title: 'ueybkdbs',
            algo: 'laslk'
        }]
    })
    
    const data = [{
        title: 'texte',
        algo: "kalka"
        },
        {
        title: 'ueybkdbs',
        algo: 'laslk'
        }
    ]

    
    useEffect( () => setState(localStorage.setItem('data', JSON.stringify(data))), [])
    

    return(
        <BrowserRouter>
            <Link to='/' onLoad={() => console.log(state)}> Home </Link>
            <Link to='/add'> Add </Link>
            <Switch>
                {/* <DataContext.Provider value={ data }> */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add' component={Add} />
                {/* </DataContext.Provider> */}
            </Switch>
        </BrowserRouter>
    )
}