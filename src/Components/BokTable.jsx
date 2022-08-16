import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function BookTable() {
    //1-Criar o status que vai conter a lista da api
    let [comments, setComments] = useState([])

//2 - Criar o objeto colunas, no qual o dataFiel é a propriedade do objeto
    const columns = [{
        dataField: 'id',
        text: ' ID'
    }, {
        dataField: 'name',
        text: 'Nome'
    }, {
        dataField: 'email',
        text: 'Email'
    },{
        dataField:'body',
        text:'Texto'

    }];


    // const produto = [{
    //     id: 1,
    //     name: 'Livro 1',
    //     price: 10
    // },
    // {
    //     id: 2,
    //     name: 'Livro 2',
    //     price: 50
    // },
    // {
    //     id: 3,
    //     name: 'Livro 3',
    //     price: 100
    // }]

    const getComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(Response => Response.json())
            .then(data => {
                setComments(data)
                console.log('comments', data)
            
            })

    }
    
        useEffect(() => {
        getComments();
    
    }, [])


    return (
        <div>
            <BootstrapTable keyField='id' data={comments} columns={columns}  pagination={ paginationFactory()} />
            
        
        </div>
    )
}
