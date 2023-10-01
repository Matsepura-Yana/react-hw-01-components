import { StatItem } from 'StatItem'

export const StatList = ({ data }) => {
    return (
        <ul class="stat-list">
            <StatItem data={data[0]} />
            <StatItem data={data[1]} />
            <StatItem data={data[2]} />
            <StatItem data={data[3]} />
            <StatItem data={data[4]} />
        </ul>
    )
}
