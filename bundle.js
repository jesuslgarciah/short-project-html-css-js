(()=>{"use strict";const n=async function(n,t){try{if(n||t){let e="";e=t?`https://www.googleapis.com/books/v1/volumes/${t}`:`https://www.googleapis.com/books/v1/volumes?q=${n}`;const a=await fetch(e),o=await a.json();return t="",o}return{}}catch(n){console.error(`Fetch error: ${n.message}`)}},t=async function(t){try{const e=await n(t);return`\n      <div class="container">\n        ${(await e.items).map((n=>`\n          <div class="card">\n            <a href="#/book/${n.id}">\n              <img src="${n.volumeInfo.imageLinks.smallThumbnail}"/>\n              <h5>${n.volumeInfo.title}</h5>\n            </a>\n          </div>\n        `)).join("")}\n      </div>\n    `}catch(n){console.error(`Home error: ${n}`)}},e=async function(){try{const t=location.hash.split("/");let e=t[t.length-1];return e||(e="O8kOAQAAIAAJ"),`\n      <div>\n        <h2>${(await n("",e)).volumeInfo.title}</h2>\n      </div>\n    `}catch(n){console.error(`Error at list book, test : ${n.message}`)}};async function a(n){"string"!=typeof n&&(n=localStorage.getItem("bookSearch")||"books");const a={home:t(n),book:e(),about:"\n    <div class=\"about\">\n      <h2>About Me 🙋🏽‍♂️</h2>\n      <p>Hello, I'm Jesus Garcia and i'm Telecomunication Engineer</p>\n      <p>I'm appasionate about technology and study, i'm currently student of Platzi Master program</p>\n      <p>I like the technologys based on Javascript Language like React.js and Node.js</p>\n      <p>My experience in technology is like Test Automation Engineer for about 3 years</p>\n      <p>I'am currently improving my skills as a developer in technologies such as React.js, Node.js, SQL and NoSQL databases, unit tests, integration tests and functional tests</p>\n    </div>\n  ",contact:'\n    <div class="contact">\n      <h2>Contact Me ✉️</h2>\n      <p>You can find me in all social network like <strong>@jesuslgarciah</strong></p>\n      <div class="social-network">\n        <ul>\n          <li>\n            <a href="https://github.com/jesuslgarciah" target="_blank">\n              <img src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="github"/>\n            </a>\n          </li>\n          <li>\n            <a href="https://www.linkedin.com/in/jesus-leonardo-garcia-hoyos-3841b8151/" target="_blank">\n              <img src="https://img.icons8.com/material-sharp/96/000000/linkedin.png" alt="linkedin"/>\n            </a>\n          </li>\n          <li>\n            <a href="https://twitter.com/jesuslgarciah" target="_blank">\n              <img src="https://img.icons8.com/material-sharp/96/000000/twitter.png" alt="twitter"/>\n            </a>\n          </li>\n          <li>\n            <a href="https://instagram.com/jesuslgarciah" target="_blank">\n              <img src="https://img.icons8.com/material-outlined/96/000000/instagram-new--v1.png"/>\n            </a>\n          </li>\n          <li>\n            <a href="https://facebook.com/jesuslgarciah" target="_blank">\n              <img src="https://img.icons8.com/material-sharp/96/000000/facebook.png" alt="facebook"/>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  ',error:"\n    <h1>404 Not Found</h1>\n  "};let o=location.hash.split("/")[1]||"home";document.querySelector(".main").innerHTML=await a[o]||await a.error}document.getElementById("form-search").addEventListener("submit",(n=>{n.preventDefault();const t=document.getElementById("book-search").value.replaceAll(" ","+");localStorage.setItem("bookSearch",t),async function(n){try{await a(n)}catch(n){console.error("Reload error "+n.message)}}(t)})),window.addEventListener("load",a),window.addEventListener("hashchange",a)})();