import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
          <input class="input" type="url" placeholder="Enter/Paste your URL" />
        </div>

        <div class="ui-topsites">
          <a href="#" class="ui-topsites-item">
            <i class="fas fa-globe ui-topsite-icon"></i>
            <span>Generate</span>
            <span class="ui-topsites-item-edit">
              <i class="fas fa-ellipsis-v"></i>
            </span>
          </a>
        </div>

        <a class="generated" href="">
          {" "}
        </a>
        <a class="btn6">copy</a>
      </div>
    </main>
  );
}
