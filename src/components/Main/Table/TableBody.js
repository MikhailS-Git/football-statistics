import { useSelector } from 'react-redux';
import '../../../styles/TableBody.css';
import Players from './Players';
import PlayerStats from './PlayerStats';

export default function TableBody(){

    const currentPlayer = useSelector(state => state.currentPlayer)

    return (
        <div className='tableBody'>
            <Players />
            {currentPlayer ? 
             <PlayerStats />
             : null
            }
        </div>
    )
}