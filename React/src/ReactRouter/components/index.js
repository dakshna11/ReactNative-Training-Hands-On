import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { About } from './About'
import { Admin } from './Admin'
import { FeaturedProducts } from './FeaturedProducts'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { NewProducts } from './NewProducts'
import { NoMatch } from './NoMatch'
import { OrderSummary } from './OrderSummary'
import { Products } from './Products'
import { UserDetails } from './UserDetails'
import { Users } from './Users'

function RouteSample(){
    return(
        <Router>
            <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='order-summary' element={<OrderSummary/>}/>
            <Route path='*' element={<NoMatch/>}/>
            <Route path='products' element={<Products/>}>
                <Route index element={<FeaturedProducts/>}/>
                <Route path='featured' element={<FeaturedProducts/>}/>
                <Route path='new' element={<NewProducts/>}/>
            </Route>
            <Route path='users' element={<Users/>}>
                <Route path=':userId' element={<UserDetails/>}/>
                <Route path='admin' element={<Admin/>}/>
            </Route>
        </Routes>
        </Router>
    )
}

export default RouteSample