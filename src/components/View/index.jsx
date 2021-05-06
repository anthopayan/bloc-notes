import React from 'react';

function View() {

const liste = [{title: "", content: ""}];
  console.log(localStorage);
const lenstorage = localStorage.length;

  for (var i=0; i < lenstorage; i++) {
    console.log(localStorage.key(i));
    var clé = localStorage.key(i);
    var contenue = localStorage.getItem(clé);
    console.log(localStorage.getItem(clé));
   
  
  

//liste.map(liste.title= clé, liste.content= contenue) ;

    
}
console.log(liste);
const handleDelete = () => {
    localStorage.clear();
   
  }

  return (

          <>
   
     
      <button style={{color: "white", backgroundColor: "red"}} onClick={handleDelete}>Tout supprimer</button>
   
    </>
    
  );
  
}

export default View;
