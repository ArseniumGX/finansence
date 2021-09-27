import { useContext, useState, useEffect } from "react"
import { FinanceContext } from "../provider/FinenceProvider"

const Edit = props => {
    const { state, mutate, setMutate } = useContext(FinanceContext)
    const item = state.findIndex(i => i.uuid === props.match.params.uuid)

    const [title, setTitle] = useState(state[item].title)
    const [type, setType] = useState(state[item].type)
    const [category, setCategory] = useState(state[item].category)
    const [value, setValue] = useState(state[item].value)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        state[item].title = title
        state[item].type = type
        state[item].category = category
        state[item].value = value

        await localStorage.setItem('data', JSON.stringify(state))
        await setMutate(!mutate)
        props.history.push('/')
    }

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
                            <input type="radio" name="type" value="entrada" checked={ type === 'entrada' ? true : false } id="in" onChange={ e => setType(e.target.value) } />
                        </div>
                        <div>
                            <label htmlFor="outer">Saída</label>
                            <input type="radio" name="type" value="saida" checked={ type === 'saida' ? true : false } id="outer" onChange={e => setType(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <input type="text" name="category" id="category" value={category} onChange={ e => setCategory(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="number" name="value" id="value" value={value} onChange={ e => setValue(+e.target.value) } />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </section>
    )
}

export default Edit