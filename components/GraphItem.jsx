import React from 'react'
import { Link } from 'components'
import axios from 'axios'

import { DeleteButton, ShowButton, ExportButton } from './_styled'

export const GraphItem = ({ graph }) => {
    const { id, name, image, json } = graph

    const deleteGraph = id => {
        axios
            .delete('http://localhost:5000/' + id)
            .then(res => {
                if (res.status === 200) {
                    alert('Graph successfully deleted')
                    window.location.reload()
                } else Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    return (
        <div className='wrapperGraph'>
            <div className='wrapperImage'>
                <span className='idTitle'>{id}</span>
                <img src={image} alt='graph' />
                <div className='shadowGraphName'>{name}</div>
            </div>

            <h4>JSON:</h4>
            <div className='wrapperInfo'>
                <pre> {json} </pre>
            </div>

            <div className='wrapperStaticButtons'>
                <DeleteButton onClick={() => deleteGraph(id)} variant='contained'>
                    Delete
                </DeleteButton>

                <Link href={`/graphs/show/${id}`} style={{ textDecoration: 'none' }}>
                    <ShowButton variant='contained'>Show</ShowButton>
                </Link>

                <Link href={`/graphs/export/${id}`} style={{ textDecoration: 'none' }}>
                    <ExportButton variant='contained'>Export</ExportButton>
                </Link>
            </div>
        </div>
    )
}
