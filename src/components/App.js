import '../styles/App.css';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App(){
    return (
        <Provider store={store}>
            <div className='app'>
                <SideBar />
                <Main />
            </div>
        </Provider>
    )
}