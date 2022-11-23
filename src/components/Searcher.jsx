import React, { useRef, useState } from 'react'
import { useMain } from '../context/main'
import { BiSearch } from "react-icons/bi"
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/Searcher.css";

function Searcher() {

  const {
    query,
    setQuery,
    slugyfyQuery,
  } = useMain();
  //
  const { slug } = useParams();
  //

  const inputRef = useRef();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  // independent function
  const validate = (value) => {
    if (!value) {
      inputRef.current.focus();
      setText(value);
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  ////


  const onChange = (event) => {
    setText(event.target.value);
    setError(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(text);
    console.log("BUSQUEDA QUERY ", query);
    if(validate(text)) {
      navigate(`/search/name=${slugyfyQuery(text)}`);
    }
    console.log("slug ", slug);
    setText("");
  }
  return (
    <div className={`search-container`}>
      <form className={`input-box`} onSubmit={onSubmit}>
        <input 
          className={`input`} 
          ref={inputRef}
          type="text"
          value={text}
          onChange={onChange}
          placeholder='Search'
        />
        <button className={`search-btn`} type="submit">
          <BiSearch className={`logo`}/>
        </button>
      </form>
    </div>
  )
}

export default Searcher