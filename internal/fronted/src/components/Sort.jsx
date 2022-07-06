import React from 'react';
import "./sort.css";

function Sort({types, value, onClickTypes}) {
const [Visable, setVisable] = React.useState(false);
const [selected, setSelected] = React.useState(0);
const list = ['popularity', 'price', 'available'];
const sortName = types[selected];

const onClickListItem = (i) => {
    setSelected(i);
    setVisable(false)
};

    return(
        <div className="sort-container">
            
            
              <b>sort on:  </b>  
              <span onClick={() => setVisable(!Visable)}>{sortName}</span>
        {
            Visable && (
                <div className="sort-pop-up active" >
                    <ul>
                     {types.map((name, i) => (
                        <li key={i}
                        onClick={() => onClickTypes(i)}
                        className={value === i ?'active' : ''}
                        >
                            {name}
                        </li>
                     ))}
                    </ul>
                </div> 
            )
        }
           
        </div>
    )
};


export default Sort;