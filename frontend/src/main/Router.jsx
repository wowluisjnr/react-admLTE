import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Content from '../components/templates/Content'
import Despesas from '../components/financeiro/Despesas';
import VisaoGeral from '../components/financeiro/VisaoGeral';


export default props =>
    <Switch>
        <Route exact path='/' component={VisaoGeral} /> {/* exact = exatamente o path='/' */}
        <Route path='/despesas' component={Despesas} />
        <Redirect from='*' to='/' />
    </Switch>