import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

export default function BookTable() {

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];


    const products= [{
    id:1,
    name: 'produto 1',
    price: 10
    }]
    

    return (
        <div>
            <BootstrapTable keyField='id' data={products} columns={columns} />
        </div>
    )
}
