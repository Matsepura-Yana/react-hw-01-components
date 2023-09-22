export const Description = ({ data }) => {
    return (
        <div className="description">
            <img src={data.avatarUrl} alt="User avatar" className="avatar" />
            <p className="name">{data.name}</p>
            <p className="tag">@{data.username.toLowerCase()}</p>
            <p className="location">{data.address.city}</p>
        </div>
    )
}
