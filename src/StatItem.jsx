export const StatItem = ({ data }) => {
    return (
        <li class="item" id={data.id}>
            <span class="label">{data.label}</span>
            <br />
            <span class="percentage">{data.percentage}%</span>
        </li>
    )
}
