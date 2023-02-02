import {useSelector, useDispatch} from 'redux-saga'
import react,{useState} from 'react'; 

function ShelfForm() {
   const distpatch = useDispatch();

  const addToShelf = (event)=>{
    event.preventDefault();
    let newItem ={
        description: description,
        image: image_url,
        userId: user_id
    }
console.log('this is newItem',newItem);
    distpatch({
        type:'NEW_ITEM_TO_POST' ,
        payload: newItem
    })
  }

    return(
        <>
        <form onSubmit={addToShelf}> 
            <input text="text" name="name" type="submit" value="submit" placeholder='enter item name'/>
            <button> click here to add</button>
        </form>
        </>
    )
}

export default ShelfForm;