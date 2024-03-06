import './App.css';
import { useState } from "react";

function App() {

  const [list, setList] = useState([]) // list 1 array ha is lye array bracket
  const [text, setText] = useState('')
  const [editIndex, setEditIndex] = useState(null);

  function AddItem() {// Yahan input value ko list me add karne ka code hoga
    // purpose: List me input ki value push krwani ha
    //mojod: LIST: list (mojod), INPUT: text (la mojod) 
    if (!text.trim() == '') { // without value ya space ho to list me value add na ho
      // if (text.trim() !== '') ye condition bh kam kr sakti ha yhn par 

      const copyList = [...list]
      copyList.push(text)
      setList(copyList)
    }

    setText('') //The input field should be empty after the value is add
  }

  function updateTxt(e) {// Yahan item ko update karne ka code hoga
    // console.log(e);
    // console.log(e.target.value);
    const value = e.target.value
    console.log(value);
    setText(value)
  }

  function deleteItem(index) {
    // PURPOSE: Jis INDEX per click hua, usko LIST me se SPLICE krna hai
    //Mojod: LIST: mojod, INDEX: la mojod: index
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
  }

  function editItem(index) {
    setEditIndex(index);
    setText(list[index]);
  }

  function updateItem() {
    if (editIndex !== null && text.trim() !== '') {
    const copyList = [...list];
     copyList[editIndex] = text;
     setList(copyList);
     setText('');
     setEditIndex(null);
    }
  }

  function deleteAll() {
    setList([])
  }

  return (
    <div className="App">
        <div className="App-header">
      <div><h2>Todo App</h2></div>

      <input type="text" placeholder="Enter Your Task" onChange={updateTxt} value={text}/>

      { editIndex === null 
      ?
      ( <button onClick={AddItem}>Add Item</button> )
      :
      ( <button onClick={updateItem}>Update Item</button> )
      }

      <button onClick={deleteAll}>Delete All</button>

      <div>

        <ul>
            {list.map(function (items, index) {
              return ( <div>
                <li style={{backgroundColor: editIndex === index ? 'yellow' : 'transparent'}}>
                  {items}

                  <button onClick={() => editItem(index)}>Edit</button>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                  
                </li>
              </div> )
            })}
        </ul>
        
      </div>
      </div>
    </div>
  );
}

export default App;
