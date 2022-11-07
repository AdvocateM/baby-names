import React from "react";


function NameList({ data }) {
  const unSorted = []
  // const sorted = unSorted.sort();
  // const nameList = data.map(name => {
  //   // Loop through the data.json file and add the names to the arrays
  //   unSorted.push(name.name)
  //   return <li key={name.id} className={name.sex}>{name.name}</li>
  // })
  // console the results of the sorted array
  console.log(unSorted)

  // Tried to loop in the array to render the result on HTML
  // const namesId = () => {
  //   for (let i = 0; i < sorted.length; i++) {
  //     console.log(sorted[i], i)
  //     return <li key={i}>{sorted[i]}</li>
  //   }


  // }


  return (
    <div className="App">
      <ul>
        {data.map(name => {
          return <li key={name.id} className={name.sex}>{name.name}</li>
        }
        )}

      </ul>
    </div>
  );
}


export default NameList;