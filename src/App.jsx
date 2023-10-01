import { Description } from 'Description'
import users from './users.json'
import { Statistics } from 'Statistics'
import data from './data.json'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

const App = () => {
    return (
        <>
            <div className="profile">
                <Description data={users[getRandomInt(10)]} />
            </div>
            <div className="statistics">
                <Statistics data={data} />
            </div>
        </>
    )
}

export default App
