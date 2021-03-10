import React from 'react'
import { Link } from "react-router-dom";


export default function Report() {
    return <main>
        <div class="ui-toolbar">
            <Link to="/">Home</Link>
            <Link to="/report"><i class="fas fa-th"></i></Link>

        </div>

        <div class="ui-wrapper">
            <div class="ui-searchbar">
                <h1>URL Shortener</h1>

                </div>
            </div>
          
    </main>
}