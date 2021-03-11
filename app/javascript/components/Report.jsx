import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Report() {
    const [loading, setLoader] = useState(true)
    const [data, setData] = useState(null)
    const [pinned, setPinned] = useState(false)
    useEffect(() => {
        getReport()
    }, [])

    const getReport = (x) => {
        Axios.get('/api/report').then(response => {
            x ? setData(response.data.links.filter(a => a.pinned)) : setData(response.data.links)
            setLoader(false)
        })
    }
    const pinIt = (url) => {
        setLoader(true)
        Axios.post('/api/v1/urlpin', { url }).then(response => {
            pinned ? setData(response.data.links.filter(a => a.pinned)) : setData(response.data.links)
            setLoader(false)
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
                <ul class="tg-list">
                    <li class="tg-list-item">
                        <h4>Pinned</h4>
                        <input value={pinned} onChange={() => { setPinned(!pinned); getReport(!pinned) }} class="tgl tgl-light" id="cb1" type="checkbox" />
                        <label class="tgl-btn" for="cb1"></label>
                    </li>
                </ul><br />

            </div>
            {loading ? <div class="spinner" >
                <div class="head">
                </div>
            </div> : <ul class="list">
                {data?.map(e => {
                    console.log(e)

                    return <li class="list__item">
                        <button onClick={() => pinIt(e.url)} style={{ position: 'absolute', marginLeft: '-5rem' }}><span>{e.pinned ? "📍" : '+'}</span></button>
                        <a href={window.location.href.slice(0, -6) + e.slug} class="list__item-text a">{window.location.href.slice(0, -6) + e.slug} <span class="tooltip span">{e.url}</span> </a>
                        <button style={{ position: 'absolute', marginLeft: '5rem' }}><span>{e.clicked ? e.clicked : 0}</span></button>

                    </li>
                })}


            </ul>}

            <br></br>
        </section>

    </main>
}