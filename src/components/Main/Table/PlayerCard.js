import { useSelector } from 'react-redux';
import '../../../styles/PlayerCard.css';

export default function PlayerCard(){

    const player =useSelector(state => state.currentPlayer)

    return (
        <div className='playerCard'>
            <p className='player-ind'>
                {player.indicator}
            </p>
            <p className='player-name'>
                {player.name}
            </p>
            <div className='player-flag'>
                <span className='player-role'>
                    {player.role}
                </span>
                <img src={player.flag} />
            </div>
            <p className='player-number'>
                {player.number}
            </p>
            <img src={player.photo} className='player-photo'/>
        </div>
    )
}