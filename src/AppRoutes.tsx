import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Movies from './Pages/Movies/Movies';
import NotFound from './Pages/NotFound/NotFound';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending'
import Tvseries from './Pages/TvSeries/Tvseries';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/tvseries' component={Tvseries} />
            <Route path='/search' component={Search } />
            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRoutes
