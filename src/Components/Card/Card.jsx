import React,{ useState} from 'react'
import s from './Card.module.css'
const Card = ({description,id,active,setActive,categories,src,filterCard}) => {
  return (
    <div className={`${s.card} ${active === true && s.card__active}`}>    
    <div className={s.card__image} onClick={()=>setActive(id)} style={{backgroundImage:`url(${src})`}}></div>
        <button className={s.card__info_button} onClick={()=>filterCard(categories)}>{categories}</button>
        <span className={s.card__info_text}>{description}</span>
    </div>
  )
}

export default Card