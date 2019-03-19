import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Despesas from '../components/financeiro/Despesas';
import ViewFinance from '../components/financeiro/ViewFinance';


export default props =>
    <Switch>
        <Route exact path='/home' component={ViewFinance}/> {/* exact = exatamente o path='/' */}
        <Route path='/despesas' component={Despesas} />
        <Redirect from='*' to='/home' />
    </Switch>