import '../../../styles/Players.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayer } from '../../../redux/store';

export default function Players(){

    const players = useSelector(state => state.players)
    const dispatch = useDispatch()

    const SetPlayer = (e) => {
        dispatch(setCurrentPlayer(parseInt(e.target.value)))

    }

    return (
        <div className='players'>
            <h4 className='players-title'>
                Выбрать игрока
            </h4>
            <div className='players-container'>
                {players.map((player) => {
                    return <div className='pc-player' key={player.id}>
                                <label>
                                    <input type='radio'
                                      name='player'
                                      value={player.id}
                                      onChange={SetPlayer}
                                      />
                                    <span className='pc-player-name'>
                                        {player.name}
                                    </span>
                                </label>
                                <span className='pc-player-indicator'>
                                    {player.indicator}
                                </span>
                            </div>
                })}
            </div>
        </div>
    )
}