class n extends HTMLElement{constructor(){super();const n=`\n    <nav>\n      ${null!==this.getAttribute("back")?'<div class="back">\n              <a href="/footbag-org/" class="nav-item nav-item--back">\n                BACK\n              </a>\n             </div>':""}\n      <a href="/footbag" class="nav-item">Footbag</a>\n      <a href="/news/all" class="nav-item">News</a>\n      <a href="/event/all" class="nav-item u-hide--small">events</a>\n      \x3c!--a class="nav-item u-hide--small">\n        Media\n      </a--\x3e\n      <a href="http://footbag.org/ifpa/" target="_blank" class="nav-item">\n        IFPA\n\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" fill="#fff"/></svg>\n\n        \x3c!--svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="8"\n          height="8"\n          viewBox="0 0 292.4 292.4"\n        >\n          <path\n            fill="#fff"\n            d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"\n          ></path>\n        </svg--\x3e\n      </a>\n    </nav>\n    `;this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`\n    <style>\n      \n    a {\n      color: inherit;\n      text-decoration: inherit;\n    }\n\n    nav {\n      background-color: var(--color-blue);\n      color: var(--color-white);\n      display: flex;\n      justify-content: flex-end;\n\n      margin: 0 auto;\n      max-width: var(--max-nav-width);\n\n      position: -webkit-sticky; /* Safari */\n      position: sticky;\n      top: 0;\n\n      z-index: 1;\n    }\n    .nav-item {\n      font-size: var(--font-size-medium);\n      padding: var(--space-xl);\n      text-transform: uppercase;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 500px) {\n      .nav-item {\n        padding-left: var(--space-l);\n        padding-right: var(--space-l);\n      }\n    }\n\n    .nav-item--selected {\n      color: var(--color-orange);\n    }\n    .nav-item--back {\n      margin-right: auto;\n    }\n\n    .nav-item:last-child {\n      border-left: 1px solid var(--color-gray-300);\n    }\n\n    .back {\n      background-color: var(--color-blue);\n      color: var(--color-orange);\n      font-weight: var(--font-weight-boldest);\n\n      position: fixed;\n      bottom: 0;\n      left: 0;\n\n      padding: var(--space-m) var(--space-s) var(--space-m) var(--space-s);\n    }\n    \n    </style>\n    ${n}\n    `}}customElements.define("navigation-bar",n);
