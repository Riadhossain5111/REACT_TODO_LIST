import React from 'react'
import './TodoList.css'

export const TodoList = (props) => {
  return (
    <div className="list-item">
        <li>
            {props.item}
        <span className='icon'>
            <i onClick={e=>{
                props.deleteListItem(props.index)
            }} className="fa-solid fa-trash"></i>
        </span>
        </li>

    </div>
  )
}
