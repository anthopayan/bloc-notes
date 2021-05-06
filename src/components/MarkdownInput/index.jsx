import React from 'react';
import NoteDisplay from '../NoteDisplay';

function MyControlledInput() {
  const [value, setValue] = React.useState("");
  const [titlev, setTitleV] = React.useState("");
  const [save, setSave] = React.useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitleV(event.target.value);
  };

  
  const handleSave = () => {
    localStorage.setItem(titlev, value);
    setSave(localStorage.getItem(titlev, value));
  }

  

  return (
<div style={{color: "white", backgroundColor: "black", marginLeft: "20%"}}>
          <>
   
      <div>Input value: {value}</div>
      <div>Resultat save : <NoteDisplay markdownValue = {localStorage.getItem(titlev)}/></div>
     <NoteDisplay markdownValue = {value} />
     <p><input id="title"  type="text" titlevalue={titlev} onChange={onChangeTitle}/></p>
      <textarea id="story" name="story"
          rows="5" cols="33" value={value} onChange={onChange}> 

</textarea>

   
      
    </>
    <br></br>
    <button style={{color: "white", backgroundColor: "red"}} onClick={handleSave}>Save</button>
    </div> 
  );
  
}

export default MyControlledInput;
