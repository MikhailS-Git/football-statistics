import { useState } from 'react';
import '../../styles/HeaderNav.css';

export default function HeaderNav(){

    const [index, setIndex] = useState(null)

    const Items = [
        {ind: 1, text: 'Сводка'},
        {ind: 2, text: 'Составы'},
        {ind: 3, text: 'Подробная статистика'},
        {ind: 4, text: 'Аналитика'}
    ]

    const SetActive = (e) => {
        switch (e.currentTarget.innerText) {
            case 'Сводка':
                setIndex(1);
                break;
            case 'Составы':
                setIndex(2);
                break;
            case 'Подробная статистика':
                setIndex(3);
                break;
            case 'Аналитика':
                setIndex(4);
                break;
        }
    }

    return (
        <div className='headerNav'>
            <ul className='header-nav'>
                {Items.map((item) => {
                    return <li
                              className={`header-nav-link ${index === item.ind ? 'header-nav-link-active' : ''}`}
                              key={item.ind}
                              onClick={SetActive}
                            >
                                {item.text}
                            </li>
                })}
            </ul>
        </div>
    )
}