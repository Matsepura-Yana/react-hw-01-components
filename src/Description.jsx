import css from 'description.module.css'

export const Description = ({ data }) => {
    return (
        <div className={css.description}>
            <img
                src={data.avatarUrl}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{data.name}</p>
            <p className={css.tag}>@{data.username.toLowerCase()}</p>
            <p className={css.location}>{data.address.city}</p>
        </div>
    )
}
