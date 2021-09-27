import { Link } from 'react-router-dom'

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
    return(
        <tr key={ uuid }>
            <td>{ index }</td>
            <td>{ title }</td>
            <td>{ type }</td>
            <td>{ category }</td>
            <td>{ value }</td>
            <td>
                <Link to={`/edit/${uuid}`}>Alterar</Link>
                <button type="button">Excluir</button>
            </td>
        </tr>
    )
}

export default Table