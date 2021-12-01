import '../../styles/SideMenu.css';
import { useState } from 'react';

export default function SideMenu(){

    const [index, setIndex] = useState(null)

    const SetIndex = (e) => {
        setIndex(e.currentTarget.getAttribute('ind'))
    }

    return (
        <div className='sideMenu'>
            <div className='side-nav'>
                <p className='nav-title'>
                    Меню
                </p>
                <ul className='nav-menu'>
                    <li className={`menu-link ${index === '1' ? 'active' : ''}`} ind='1' onClick={SetIndex}>
                        <span className='link-icon'>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.504838 8.26857L0.536515 8.30223L0.504838 8.26857C0.435176 8.33413 0.386611 8.41953 0.36533 8.51354C0.34405 8.60754 0.351003 8.70592 0.385311 8.79586C0.419623 8.8858 0.479749 8.96324 0.557992 9.01791C0.636249 9.0726 0.728941 9.10193 0.82394 9.10194H1.94836V18.2109C1.94836 18.3379 1.9977 18.46 2.08587 18.5501C2.17406 18.6403 2.2939 18.6912 2.41908 18.6912H7.08865C7.21383 18.6912 7.33367 18.6403 7.42187 18.5501C7.51003 18.46 7.55938 18.3379 7.55938 18.2109V13.9163H10.9402V18.2109C10.9402 18.3379 10.9895 18.46 11.0777 18.5501C11.1659 18.6403 11.2857 18.6912 11.4109 18.6912H16.0805C16.2056 18.6912 16.3255 18.6403 16.4137 18.5501C16.5018 18.46 16.5512 18.3379 16.5512 18.2109V9.10194H17.7528C17.8478 9.10193 17.9405 9.0726 18.0187 9.01791C18.097 8.96324 18.1571 8.88581 18.1914 8.79586C18.2257 8.70592 18.2327 8.60754 18.2114 8.51354C18.1901 8.41953 18.1416 8.33413 18.0719 8.26857L9.60752 0.303499C9.60751 0.303498 9.60751 0.303496 9.60751 0.303495C9.52067 0.221752 9.40675 0.17622 9.28833 0.17622C9.1699 0.17622 9.05598 0.221753 8.96914 0.303495C8.96914 0.303496 8.96914 0.303498 8.96914 0.303499L0.504838 8.26857ZM16.0805 8.14133C15.9553 8.14133 15.8354 8.19219 15.7472 8.28238C15.6591 8.37253 15.6097 8.49458 15.6097 8.62164V17.7306H11.8816V13.436C11.8816 13.3089 11.8323 13.1869 11.7441 13.0967C11.6559 13.0066 11.5361 12.9557 11.4109 12.9557H7.08865C6.96347 12.9557 6.84363 13.0066 6.75543 13.0967C6.66727 13.1869 6.61792 13.3089 6.61792 13.436V17.7306H2.88981V8.62164C2.88981 8.5587 2.87769 8.49636 2.85412 8.43817C2.83054 8.37997 2.79596 8.32702 2.7523 8.28238C2.70864 8.23773 2.65675 8.20226 2.59956 8.17804C2.54238 8.15381 2.48105 8.14133 2.41908 8.14133H2.02871L9.28837 1.30995L16.548 8.14133H16.0805Z" fill="#6A6E71" stroke="#6A6E71" strokeWidth="0.09"/>
                            </svg>
                        </span>
                        <span className='link-text'>
                            Обзор команды
                        </span>
                    </li>
                    <li className={`menu-link ${index === '2' ? 'active' : ''}`} ind='2' onClick={SetIndex}>
                        <span className='link-icon'>
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6193 18.1407L15.6193 1.10365C15.6193 0.7647 15.286 0.558276 14.9703 0.558276L1.69619 0.558276C1.38042 0.558276 1.04712 0.764699 1.04712 1.10365L1.04711 18.1407C1.04711 18.4796 1.38042 18.6861 1.69619 18.6861L5.40846 18.6861L11.258 18.6861L14.9703 18.6861C15.286 18.6861 15.6193 18.4796 15.6193 18.1407ZM6.35808 10.1675L10.3081 10.1675C9.99728 10.8508 9.1903 11.2184 8.33342 11.2187C7.47647 11.2191 6.66918 10.8522 6.35808 10.1675ZM10.3081 9.07679L6.35816 9.07679C6.66901 8.39368 7.47599 8.02618 8.33287 8.02578C9.18985 8.02538 9.99711 8.39222 10.3081 9.07679ZM14.3212 9.07679L11.658 9.07679C11.2978 7.62911 9.78122 6.94014 8.33329 6.93988C6.88529 6.93962 5.36856 7.62813 5.00819 9.07679L2.34526 9.07679L2.34526 1.64902L4.76294 1.64902C4.84824 3.18466 6.45711 4.35102 8.33323 4.35102C10.2093 4.35102 11.8182 3.18466 11.9035 1.64902L14.3212 1.64902L14.3212 9.07679ZM8.33323 3.26028C7.09751 3.26028 6.15131 2.51802 6.0641 1.65137L10.6024 1.65137C10.5151 2.51802 9.56894 3.26028 8.33323 3.26028ZM6.0641 17.5953C6.15131 16.7287 7.09751 15.9864 8.33323 15.9864C9.56894 15.9864 10.5151 16.7287 10.6024 17.5953L6.0641 17.5953ZM11.9034 17.5953C11.8166 16.0608 10.2084 14.8957 8.33323 14.8957C6.45807 14.8957 4.84988 16.0608 4.76307 17.5953L2.34526 17.5953L2.34526 10.1675L5.00819 10.1675C5.36836 11.6153 6.88496 12.3044 8.33292 12.3047C9.78095 12.3049 11.2977 11.6164 11.658 10.1675L14.3212 10.1675L14.3212 17.5953L11.9034 17.5953Z" fill="#6A6E71" stroke="#6A6E71" strokeWidth="0.09"/>
                            </svg>
                        </span>
                        <span className='link-text'>
                             Обзор матча
                        </span>
                    </li>
                    <li className={`menu-link ${index === '3' ? 'active' : ''}`} ind='3' onClick={SetIndex}>
                        <span className='link-icon'>
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.955213 5.04676H3.7301C3.84785 5.04675 3.96078 5.00139 4.04404 4.92066C4.1273 4.83992 4.17408 4.73041 4.17408 4.61623V1.25273C4.17408 1.13855 4.1273 1.02905 4.04404 0.94831C3.96078 0.867571 3.84785 0.82221 3.7301 0.822205H0.955213C0.837463 0.82221 0.724538 0.867571 0.641276 0.94831C0.558015 1.02905 0.511236 1.13855 0.51123 1.25273V4.61623C0.511236 4.73041 0.558015 4.83992 0.641276 4.92066C0.724538 5.00139 0.837463 5.04675 0.955213 5.04676ZM1.39919 1.68326H3.28612V4.1857H1.39919V1.68326Z" fill="#6A6E71"/>
                                <path d="M0.954968 9.63447H12.7482C12.866 9.63446 12.9789 9.5891 13.0622 9.50836C13.1454 9.42762 13.1922 9.31812 13.1922 9.20394V5.84044C13.1922 5.72626 13.1454 5.61676 13.0622 5.53602C12.9789 5.45528 12.866 5.40992 12.7482 5.40991H0.954968C0.837219 5.40992 0.724294 5.45528 0.641032 5.53602C0.557771 5.61676 0.510992 5.72626 0.510986 5.84044V9.20394C0.510992 9.31812 0.557771 9.42762 0.641032 9.50836C0.724294 9.5891 0.837219 9.63446 0.954968 9.63447ZM1.39895 6.27097H12.3043V8.77341H1.39895V6.27097Z" fill="#6A6E71"/>
                                <path d="M0.954968 14.2223H6.50474C6.62249 14.2223 6.73542 14.177 6.81868 14.0962C6.90194 14.0155 6.94872 13.906 6.94873 13.7918V10.4283C6.94872 10.3141 6.90194 10.2046 6.81868 10.1239C6.73542 10.0431 6.62249 9.99778 6.50474 9.99777H0.954968C0.837219 9.99778 0.724294 10.0431 0.641032 10.1239C0.557771 10.2046 0.510992 10.3141 0.510986 10.4283V13.7918C0.510992 13.906 0.557771 14.0155 0.641032 14.0962C0.724294 14.177 0.837219 14.2223 0.954968 14.2223ZM1.39895 10.8588H6.06076V13.3613H1.39895V10.8588Z" fill="#6A6E71"/>
                                <path d="M15.6316 14.5856H0.874244C0.777904 14.5856 0.685511 14.6287 0.617387 14.7054C0.549264 14.7822 0.510991 14.8862 0.510986 14.9947V18.1908C0.510991 18.2993 0.549264 18.4034 0.617387 18.4801C0.685511 18.5568 0.777904 18.5999 0.874244 18.5999H15.6316C15.7279 18.5999 15.8203 18.5568 15.8885 18.4801C15.9566 18.4034 15.9949 18.2993 15.9949 18.1908V14.9947C15.9949 14.8862 15.9566 14.7822 15.8885 14.7054C15.8203 14.6287 15.7279 14.5856 15.6316 14.5856ZM15.2683 17.7817H1.2375V15.4038H15.2683V17.7817Z" fill="#6A6E71"/>
                            </svg>
                        </span>
                        <span className='link-text'>
                            Сравнение игроков
                        </span>
                    </li>
                    <li className={`menu-link ${index === '4' ? 'active' : ''}`} ind='4' onClick={SetIndex}>
                        <span className='link-icon'>
                            <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9189 4.28497L11.5047 1.51093C11.1762 1.13606 10.7164 0.911133 10.2566 0.911133H1.48673C0.780546 0.911133 0.222168 1.56716 0.222168 2.35439V17.2743C0.222168 18.0802 0.796969 18.7175 1.48673 18.7175H13.1798C13.886 18.7175 14.4444 18.0615 14.4444 17.2743V5.70948C14.4444 5.16592 14.2637 4.65984 13.9189 4.28497ZM13.4262 17.2743C13.4262 17.4242 13.3112 17.5554 13.1798 17.5554H1.48673C1.35535 17.5554 1.24039 17.4242 1.24039 17.2743V2.35439C1.24039 2.20444 1.35535 2.07323 1.48673 2.07323H10.2401C10.4372 2.07323 10.6343 2.16695 10.7821 2.33564L13.2127 5.10969C13.3605 5.27838 13.4426 5.5033 13.4426 5.72823V17.2743H13.4262Z" fill="#6A6E71"/>
                                <path d="M8.69465 11.9511L7.84178 12.7474V9.24046C7.84178 8.98012 7.61217 8.76572 7.33335 8.76572C7.05453 8.76572 6.82491 8.98012 6.82491 9.24046V12.7474L5.97205 11.9511C5.77523 11.7673 5.44721 11.7673 5.25039 11.9511C5.05358 12.1348 5.05358 12.4411 5.25039 12.6249L6.97252 14.2329C7.07093 14.3248 7.20214 14.3707 7.33335 14.3707C7.46456 14.3707 7.59577 14.3248 7.69417 14.2329L9.4163 12.6249C9.61311 12.4411 9.61311 12.1348 9.4163 11.9511C9.21948 11.7673 8.89146 11.7673 8.69465 11.9511Z" fill="#6A6E71"/>
                                <path d="M10.2201 6.93558H4.46842C4.18905 6.93558 3.95898 7.1491 3.95898 7.40838V9.13182C3.95898 9.3911 4.18905 9.60463 4.46842 9.60463C4.74779 9.60463 4.97786 9.3911 4.97786 9.13182V7.88118H9.72712V9.13182C9.72712 9.3911 9.95719 9.60463 10.2366 9.60463C10.5159 9.60463 10.746 9.3911 10.746 9.13182V7.39313C10.7296 7.13385 10.4995 6.93558 10.2201 6.93558Z" fill="#6A6E71"/>
                            </svg>
                        </span>
                        <span className='link-text'>
                            Отчеты
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}