import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Home() {
  const [data, setData] = useState({ url: '' })
  const [clicked, setClicked] = useState(false)
  const [generated, setGenerated] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createLink = () => {
    Axios.post('/api/v1/url', { url: data.url }).then(response => {
      console.log(response)
      setGenerated(response.data.slug)
    })
  }

  console.log(data)
  return (
    <main>
      <div class="ui-toolbar">
        <a href="#">Home</a>
        <a href="#">
          <i class="fas fa-th"></i>
        </a>
      </div>

      <div class="ui-wrapper">
        <div class="ui-searchbar">
          <h1>URL Shortener</h1>
          <input onChange={handleChange} name='url' class="input" type="url" placeholder="Enter/Paste your URL" />
        </div>

        <div class="ui-topsites">
          {clicked ? <div class="lds-ripple"><div></div><div></div></div> : <a onClick={() => createLink()} class="ui-topsites-item">
            <i class="fas fa-globe ui-topsite-icon"></i>
            <span>Generate</span>
            <span class="ui-topsites-item-edit">
              <i class="fas fa-ellipsis-v"></i>
            </span>
          </a>}



        </div>

        {generated ? <><a class="generated" href={window.location.href  + generated}>
          {window.location.href+ generated}
        </a><a class="btn6">copy</a> </> : ''}
      </div>
    </main>
  );
}
