import { useDispatch, useSelector } from "react-redux"

function ShelfItem({item}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()

const handleDelete = () =>{
 dispatch({
    type: 'DELETE_ITEM',
    payload: item.id
 })
}

    return(
        
        <li>
         <div key={item.id}>
         <h1>{item.description} </h1>
          <img style={{ maxWidth: 200, maxHeight: 200,}} src={item.image_url}/>
          </div>
          {user.id === item.user_id ? ( <button onClick={handleDelete}>delete</button> ):(<div></div>)}
        </li>
    )
}

export default ShelfItem


//item has to be an object so we dont have to do dot.x