import React from "react";
import { useState } from "react";

function Search() {
  const [values, setValue] = useState('')
  const filter = (e) => {
    setValue(e.target.value)
    console.log(values)
  }
  // filterUpdate() {
  //   const value = this.refs.myValue.value;
  //   console.log(value)
  // }
  return (
    <form>
      <input type='text' placeholder="Search Name" onChange={filter.bind(this)} />
    </form>
  )
}

export default Search;