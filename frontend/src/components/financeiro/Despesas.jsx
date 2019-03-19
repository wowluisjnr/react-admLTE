// import './Despesas.css'

import React from 'react'
import ContentHeader from '../templates/ContentHeader';
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';

export default props=>
<div className="content-wrapper">

<ContentHeader/>
<section className="content">
    <div className="row">
        <Box width={12} theme='box-danger' title='Despesas'>
            <Table/>
        </Box>
    </div>
</section>
</div>