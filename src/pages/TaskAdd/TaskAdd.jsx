
import './TaskAdd.scss';
import { useState } from 'react';



const TaskAdd= ({})=> {
let card = [1]
const newCard = useState(card)


return (
        <section className='container'>
            {card.map(el=> <div className='card'>{el}</div>)}
            <button className='btn__new' onClick={newCard}>добавить</button>
        </section>
    )
}
export default TaskAdd