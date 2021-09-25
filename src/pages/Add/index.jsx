import moment from 'moment'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default (props) => {
    const handleSubmit = e => {
        e.preventDefault()
        const obj = {
            uuid: uuid(),
            title,
            type,
            category,
            value,
            createdAt: moment(Date.now()).format()
        }

        localStorage.setItem('data', [JSON.stringify(obj)])
        props.history.push('/')
    }

    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState('')
    
    return(
        <section>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" value={title} onChange={ e => setTitle(e.target.value) } />
                </div>
                <div>
                    <h6>Tipo</h6>
                    <div className="type">
                        <div>
                            <label htmlFor="inner">Entrada</label>
                            <input type="radio" name="type" value="entrada" id="in" onChange={ e => setType(e.target.value) } />
                        </div>
                        <div>
                            <label htmlFor="outer">Saída</label>
                            <input type="radio" name="type" value="saida" id="outer" onChange={e => setType(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <input type="text" name="category" id="category" value={category} onChange={ e => setCategory(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="number" name="value" id="value" value={value} onChange={ e => setValue(e.target.value) } />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </section>
    )
}