import React from 'react';

function View() {

const liste = [{title: "", content: ""}];
  console.log(localStorage);
const lenstorage = localStorage.length;
const keys = Object.keys(localStorage);
const values = Object.values(localStorage);
var totalresult = [];
  for (var i=0; i < lenstorage; i++) {
    console.log(localStorage.key(i));
    var clé = localStorage.key(i);
    var contenue = localStorage.getItem(clé);
    console.log(localStorage.getItem(clé));
    var line = {title: keys[i], description: values[i]};
    totalresult.push(line);

  

//liste.map(liste.title= clé, liste.content= contenue) ;

    
}
console.log(localStorage);
console.log(totalresult);
const handleDelete = () => {
    localStorage.clear();
   
  }
var indents = [];
for (var i=0; i < lenstorage; i++){
  indents.push(<span key={i}>{"Titre: " + totalresult[i].title + ", Description: " + totalresult[i].description}</span>)
  indents.push(<br></br>)
}

  return (
   <>
    {indents}
      <button style={{color: "white", backgroundColor: "red"}} onClick={handleDelete}>Tout supprimer</button>
   </>
  )
}

export default View;
