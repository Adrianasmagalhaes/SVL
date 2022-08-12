import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

export default function BookTable() {
    let [posts, setPosts] = useState([])


    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'title',
        text: 'Titulo'
    }, {
        dataField: 'body',
        text: 'Texto'
    }];


    const Product = [{
        id: 1,
        name: 'Livro 1',
        price: 10
    },
    {
        id: 2,
        name: 'Livro 2',
        price: 50
    },
    {
        id: 3,
        name: 'Livro 3',
        price: 100
    }]

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => {
                setPosts(data)
                console.log('posts', data)
            
            })

    }
    
        useEffect(() => {
        getPosts();
    
    }, [])


    return (
        <div>
            <BootstrapTable keyField='id' data={posts} columns={columns} />
        </div>
    )
}