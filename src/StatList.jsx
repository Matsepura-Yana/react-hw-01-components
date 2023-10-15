import { StatItem } from 'StatItem'
import css from './statList.module.css'

export const StatList = ({ data }) => {
    return (
        <ul className={css.statList}>
            {data.map(el => {
                return <StatItem data={el} />
            })}
        </ul>
    )
}
