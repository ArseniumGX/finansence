import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import '../styles/table.scss'

export const TableHead = () => {
    return(
        <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Ações</th>
            </tr>
        </thead>
    )
}

const TableFoot = () => {}

const Table = ({values: { uuid, title, type, category, value}, index}) => {

    const [open, setOpen] = useState()
    const modalOpen = () => setOpen(true)
    const modalClose = () => setOpen(false)
    
    return(
        <tr key={ uuid }>
            <td>{ index }</td>
            <td>{ title }</td>
            <td>{ type }</td>
            <td>{ category }</td>
            <td>{ value }</td>
            <td>
                <Link to={`/edit/${uuid}`}>Alterar</Link>
                <button type="button" onClick={ modalOpen }>Excluir</button>
                <Modal show={ open } onClose={ modalClose } item={ index } />
            </td>
        </tr>
    )
}

export default Table