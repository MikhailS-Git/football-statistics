import '../../styles/Main.css';
import MainHeader from './MainHeader';
import MainBody from './MainBody';

export default function Main(){
    return (
        <div className='main'>
            <MainHeader />
            <MainBody />
        </div>
    )
}