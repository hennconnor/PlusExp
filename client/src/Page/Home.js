import { userState } from '../atoms';
import { useRecoilValue } from 'recoil'

function Home() {
    const user = useRecoilValue(userState)
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center mx-3.5 bg-[#C3C7C4] items-center'>
                {user ? <h1 className='text-3xl my-2'>Welcome {user.name}!</h1> : <h1 className='text-3xl my-2'>Welcome!</h1>}
                <p className='max-w-[400px] text-center'>Plus Exp seeks to make the process of completing everyday tasks and accomplishing tasks in the real world more fulfilling.  It does this by creating a space where user's create trackable tasks, that they can set an Exp or experience points reward for.  Exp is then used to level up your user, gamifying the experience of completing everyday tasks.</p>
                <img className='my-5' src='https://www.guinnessworldrecords.com/Images/Top-10-best-selling-consoles_tcm25-551954.jpg' alt='videogames' height='300px' width='500px' />
            </div >
        </div >
    )
}

export default Home;