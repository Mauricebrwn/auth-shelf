import {useSelector, useDispatch} from 'react-redux'
import react,{useState} from 'react'; 

function ShelfForm() {
   const dispatch = useDispatch();
   const user= useSelector ((store)=> store.user)
const [newDescription, setNewDescription] = useState('')
const [newImage, setNewImage] = useState('')
const [newId, setNewInput] = useState('')
  const addToShelf = (event)=>{
    event.preventDefault();
    let newItem ={
        description: newDescription,
        image: newImage,
        user_id: user.id
    }
console.log('this is newItem',newItem);
    dispatch({
        type:'NEW_ITEM_TO_POST' ,
        payload: newItem
    })
    setNewDescription(''),
    setNewImage('')
  }

    return(
        <>
        <form onSubmit={addToShelf}> 
            <input  type="text" value={newDescription} onChange= {e=>setNewDescription(e.target.value)} placeholder='description'/>
            <input  type="text" value={newImage} onChange= {e=>setNewImage(e.target.value)}placeholder='Image URL'/>
            <button> click here to add</button>
        </form>
        </>
    )
}

export default ShelfForm;