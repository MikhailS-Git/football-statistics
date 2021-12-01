import '../../../styles/Table.css';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table(){
    return (
        <div className='table'>
            <TableHeader />
            <TableBody />
        </div>
    )
}