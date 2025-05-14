import { useState } from "react"
export function NewTodoForm(onSubmit) { 
  const [newItem, setNewItem] = useState("")
  
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
      

        onSubmit(newItem)
        
      
      setNewItem("")
      }

    return (
        
        <form  className="new-item-form">
          <div className="for-now">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)}  type="text" id="item" />
          </div>
          <button onClick={() => handleSubmit} className="btn">Add</button>
        </form>
    )
}