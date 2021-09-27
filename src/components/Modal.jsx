import { useContext } from 'react'
import { FinanceContext } from '../provider/FinenceProvider'
import '../styles/modal.scss'

const Modal = props => {
    const { state, setState, mutate, setMutate } = useContext(FinanceContext)

    const id = props.item
    
    if(!props.show){
        return null
    }

    const handleBtnDelete = async() => {
        state.splice(id, 1)
        await localStorage.setItem('data', JSON.stringify(state))
        setMutate(!mutate)
        props.onClose()
    }

    return(
        <div className="modal" onClick={ props.onClose }>
            <div className="modal-content" onClick={ e => e.stopPropagation() }>
                <h4>Aviso</h4>
                <hr />
                <p>Tem certeza que deseja deletat este item ?</p>
                <div className="buttons">
                    <button onClick={ handleBtnDelete }>Sim</button>
                    <button onClick={ props.onClose }>Não</button>
                </div>
            </div>
        </div>
    )
}

export default Modal