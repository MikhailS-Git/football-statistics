import '../../styles/SideBar.css';
import logoL from '../../assets/img/logo-large.svg';
import logoS from '../../assets/img/logo-small.svg';
import SideMenu from './SideMenu';
import SideTeam from './SideTeam';
import SideFeedback from './SideFeedback';


export default function SideBar(){
    return (
        <div className='sideBar'>
            <div className='logo-box'>
                <img src={window.innerWidth > 1280 ? logoL : logoS} />
            </div>
            <SideMenu />
            <SideTeam />
            <SideFeedback />
        </div>
    )
}