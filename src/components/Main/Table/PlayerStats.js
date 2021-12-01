import '../../../styles/PlayerStats.css';
import Chart from './BarChart';
import PlayerCard from './PlayerCard';


export default function PlayerStats(){

    return (
        <div className='playerStats'>
            <div className='stats-header'>
                <h3 className='stats-title'>
                    Значимость кадого показателя в рассчете оценки игрока
                </h3>
                <PlayerCard />
                <div className='player-load'>
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9189 4.28497L11.5047 1.51093C11.1762 1.13606 10.7164 0.911133 10.2566 0.911133H1.48673C0.780546 0.911133 0.222168 1.56716 0.222168 2.35439V17.2743C0.222168 18.0802 0.796969 18.7175 1.48673 18.7175H13.1798C13.886 18.7175 14.4444 18.0615 14.4444 17.2743V5.70948C14.4444 5.16592 14.2637 4.65984 13.9189 4.28497ZM13.4262 17.2743C13.4262 17.4242 13.3112 17.5554 13.1798 17.5554H1.48673C1.35535 17.5554 1.24039 17.4242 1.24039 17.2743V2.35439C1.24039 2.20444 1.35535 2.07323 1.48673 2.07323H10.2401C10.4372 2.07323 10.6343 2.16695 10.7821 2.33564L13.2127 5.10969C13.3605 5.27838 13.4426 5.5033 13.4426 5.72823V17.2743H13.4262Z" fill="#FFF"/>
                        <path d="M8.69465 11.9511L7.84178 12.7474V9.24046C7.84178 8.98012 7.61217 8.76572 7.33335 8.76572C7.05453 8.76572 6.82491 8.98012 6.82491 9.24046V12.7474L5.97205 11.9511C5.77523 11.7673 5.44721 11.7673 5.25039 11.9511C5.05358 12.1348 5.05358 12.4411 5.25039 12.6249L6.97252 14.2329C7.07093 14.3248 7.20214 14.3707 7.33335 14.3707C7.46456 14.3707 7.59577 14.3248 7.69417 14.2329L9.4163 12.6249C9.61311 12.4411 9.61311 12.1348 9.4163 11.9511C9.21948 11.7673 8.89146 11.7673 8.69465 11.9511Z" fill="#FFF"/>
                        <path d="M10.2201 6.93558H4.46842C4.18905 6.93558 3.95898 7.1491 3.95898 7.40838V9.13182C3.95898 9.3911 4.18905 9.60463 4.46842 9.60463C4.74779 9.60463 4.97786 9.3911 4.97786 9.13182V7.88118H9.72712V9.13182C9.72712 9.3911 9.95719 9.60463 10.2366 9.60463C10.5159 9.60463 10.746 9.3911 10.746 9.13182V7.39313C10.7296 7.13385 10.4995 6.93558 10.2201 6.93558Z" fill="#FFF"/>
                    </svg>
                </div>
            </div>
            <Chart />
        </div>
    )
}