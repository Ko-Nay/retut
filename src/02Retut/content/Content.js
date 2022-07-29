import React, {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import reportWebVitals from '../../reportWebVitals';

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Web Designer",
        },
        {
            id: 2,
            checked: false,
            item: "Web Developer",
        },
        {
            id: 3,
            checked: false,
            item: "Mobile Developer",
        },
        {
            id: 4,
            checked: false,
            item: "Front-end Developer",
        },
        {
            id: 5,
            checked: false,
            item: "Back-end Developer",
        },
        {
            id: 6,
            checked: false,
            item: "UI/UX Designer",
        },
        {
            id: 7,
            checked: false,
            item: "Fullstack Developer",
        },
    ]);

    const onHandleDelete = (id) => {
        const itemList = items.filter((item)=> (item.id !== id));
        setItems(itemList);
    };

    const onHandleCheck = (id) => {
        const checkItem = items.map((item)=> item.id === id ? { ...item, checked: ! item.checked} : item );
        setItems(checkItem);
        localStorage.setItem('shoppingList', JSON.stringify(checkItem));
    };

  return (
    <>
    <main> 
        {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                            type="checkbox"
                            checked={item.checked}
                            onClick={() => onHandleCheck(item.id)}
                        >

                        </input>
                        <label 
                            style={ (item.checked) ? {textDecoration: 'none', color: 'blue'} : null }
                            onDoubleClick={ () => onHandleCheck(item.id)}
                        >{ item.item}</label>
                        <FaTrashAlt
                            role="button"
                            tabIndex= "0"
                            onClick={() => onHandleDelete(item.id)}
                        />
                    </li>
                ))}
            </ul>

        ) : 'There is no data to display!'}
        

    </main>
    </>
  )
}

export default Content
