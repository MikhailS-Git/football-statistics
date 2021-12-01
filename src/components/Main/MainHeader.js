import '../../styles/MainHeader.css';
import HeaderNav from './HeaderNav';
import User from './User';

export default function MainHeader(){
    return (
        <div className='mainHeader'>
            <h2 className='header-title'>
                Обзор матча
            </h2>
            <HeaderNav />
            <User />
        </div>
    )
}