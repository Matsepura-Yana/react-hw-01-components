import { StatList } from 'StatList'

export const Statistics = ({ data }) => {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            <StatList data={data} />
        </section>
    )
}
