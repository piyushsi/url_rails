import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Home() {
  const [data, setData] = useState({ url: '' })
  const [clicked, setClicked] = useState(false)
  const [generated, setGenerated] = useState('')
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createLink = () => {
    setGenerated('')
    setClicked(true)
    Axios.post('/api/v1/url', { url: data.url }).then(response => {
      if (response.data.success) {
        setGenerated(response.data.slug)
        setClicked(false)
      }
    })
  }
  const checkLink = () => {
    setGenerated('')
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(data.url)) {
      setError("Please enter valid URL.");
      return false;
    } else {
      setError(false)
      return true;
    }
  }

  console.log(data)
  return (
    <main>
      <div class="ui-toolbar">
        <Link to="/">Home</Link>
        <Link to="/report"><i class="fas fa-th"></i></Link>

      </div>

      <div class="ui-wrapper">
        <div class="ui-searchbar">
          <h1>URL Shortener</h1>
          
          <input onChange={handleChange} name='url' class="input" type="url" placeholder="Enter/Paste your URL" />
          <a class="generated" >
          {error?error:''}
        </a>
        </div>

        <div class="ui-topsites">
          {clicked ? <div class="lds-ripple"><div></div><div></div></div> : <a onClick={() => checkLink() ? createLink() : ''} class="ui-topsites-item">
            <i class="fas fa-globe ui-topsite-icon"></i>
            <span>Generate</span>
            <span class="ui-topsites-item-edit">
              <i class="fas fa-ellipsis-v"></i>
            </span>
          </a>}



        </div>

        {generated ? <><a class="generated" >
          {window.location.href + generated}
        </a><a class="btn6" onClick={(e) => { e.target.innerText = 'copied'; navigator.clipboard.writeText(window.location.href + generated) }} name={window.location.href + generated}>copy</a> </> : ''}
      </div>
    </main>
  );
}
