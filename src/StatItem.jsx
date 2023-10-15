import css from './statItem.module.css'
import css2 from './statList.module.css'

export const StatItem = ({ data }) => {
    const selector = data.id
    return (
        <li className={`${css2[selector]} ${css.item}`}>
            <span className={css.label}>{data.label}</span>
            <br />
            <span className={css.percentage}>{data.percentage}%</span>
        </li>
    )
}
