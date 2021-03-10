import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Report() {
    const [data, setData] = useState(null)
    useEffect(() => {
        Axios.get('/api/report').then(response => {
            setData(response.data.links)
        })
    }, [])
    const pinIt = (url) => {
        Axios.post('/api/v1/urlpin', { url }).then(response => {
            setData(response.data.links)
        })
    }
    return <main>
        <div class="ui-toolbar">
            <Link to="/">Home</Link>
            <Link to="/report"><i class="fas fa-th"></i></Link>

        </div>


        <section class="flex">
            <div class="ui-searchbar">
                <h1>URL Shortener Report</h1>

            </div>
            <ul class="list">
                {data?.map(e => {
                    console.log(e)

                    return <li class="list__item">
                        <button onClick={() => e.pinned?'':pinIt(e.url)} style={{ position: 'absolute', marginLeft: '-5rem' }}><span>{e.pinned ? "📍" : '+'}</span></button>
                        <a href={window.location.href.slice(0, -6) + e.slug} class="list__item-text a">{window.location.href.slice(0, -6) + e.slug} <span class="tooltip span">{e.url}</span> </a>
                        <button style={{ position: 'absolute', marginLeft: '5rem' }}><span>{e.clicked ? e.clicked : 0}</span></button>

                    </li>
                })}


            </ul>
            <br></br>
        </section>

    </main>
}