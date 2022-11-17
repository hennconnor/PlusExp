import { userState } from '../atoms';
import { useRecoilValue } from 'recoil'

function Home() {
    const user = useRecoilValue(userState)
    return (
        <div>
            {user ? <h1>Welcome {user.name}!</h1> : <h1>Welcome!</h1>}
            <p id="homePage">Plus Exp seeks to make the process of completing everyday tasks and accomplishing tasks in the real world more fulfilling.  It does this by creating a space where user's create trackable tasks, that they can set an Exp or experience points reward for.  Exp is then used to level up your user, gamifying the experience of completing everyday tasks.</p>
            <img src='https://www.guinnessworldrecords.com/Images/Top-10-best-selling-consoles_tcm25-551954.jpg' alt='videogames' height='300px' width='500px' />
        </div>
    )
}

export default Home;