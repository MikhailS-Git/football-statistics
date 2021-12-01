import '../../../styles/TableHeader.css';
import { useState } from 'react';

export default function TableHeader(){

    const [index, setIndex] = useState(null)

    const Items = [
        {ind: 1, text: 'Атака'},
        {ind: 2, text: 'Оборона'},
        {ind: 3, text: 'Пасы'},
        {ind: 4, text: 'BT Score'}
    ]

    const setActive = (e) => {
        switch (e.currentTarget.innerText){
            case 'Атака':
                setIndex(1);
                break;
            case 'Оборона':
                setIndex(2);
                break;
            case 'Пасы':
                setIndex(3);
                break;
            case 'BT Score':
                setIndex(4);
                break;
        }
    }

    return (
        <div className='tableHeader'>
            <ul className='th-nav'>
                {Items.map((item) => {
                    return  (
                        <li 
                          key={item.ind}
                          className={`th-link ${index === item.ind ? 'th-link-active' : ''}`}
                          onClick={setActive}
                        >
                              {item.text}
                          </li>
                    )
                })}
            </ul>
        </div>
    )
}