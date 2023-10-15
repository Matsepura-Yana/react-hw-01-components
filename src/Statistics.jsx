import { StatList } from 'StatList'
import css from './statistics.module.css'

export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <StatList data={data} />
        </section>
    )
}
