import Table from "../Table/Table";
import s from './Banks.module.css'

const Banks = () => {
    return (
        <div>
            <Table />
            <div>
                <form>
                    <label className={s.input}>

                        <input type="text" placeholder="Bank Name" />
                    </label>
                    <label className={s.input}>

                        <input type="text" placeholder="Interest rate" />
                    </label>
                    <label className={s.input}>

                        <input type="text" placeholder="Max Loan" />
                    </label>
                    <label className={s.input}>

                        <input type="text" placeholder="Min Down Payment" />
                    </label>
                    <label className={s.input}>

                        <input type="text" placeholder="Loan Term" />
                    </label>
                    <input type="submit" value="add bank" />
                </form>
            </div>
        </div>
    )
}
export default Banks;