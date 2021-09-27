import { useContext } from "react"
import { FinanceContext } from '../provider/FinenceProvider'
import Table, { TableHead } from '../components/Table'

const Home = () => {
    const { state } = useContext(FinanceContext)
    return(
        <section>
            <table>
                <TableHead />
                <tbody>
                    {state.map((item, index) => (
                        <Table values={ item } index={ index } key={ index } />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Home