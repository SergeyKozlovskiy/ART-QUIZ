(()=>{"use strict";function t(t,e,s){return`<div class="cardQustion animateElem">\n            <img class="${t} cardQustion_img" src="./images/main-pg/${e}" alt="${e}">\n            <p class="cardQustion_text">${s}</p>\n          </div>`}function e(t){return root.insertAdjacentHTML("beforeend",`${t}`)}function s(t,e){return`<div class="box animateElem">\n            <div class="${t} btn">${e}</div>\n          </div>`}const n=document.getElementById("root");function a(){e('<img class="logo animateElem" src="./images/main-pg/logo/logo.png" alt="logo">'),n.insertAdjacentHTML("beforeend",`<div class ="container">\n        <div class="wrapper">${t("PICTURES_QUIZ","pictures.jpg","PICTURES  QUIZ")}\n          ${t("ARTISTS_QUIZ","artist.jpg","ARTISTS  QUIZ")}\n        </div>\n    </div>`),n.insertAdjacentHTML("beforeend",`<div class = "container">\n    ${s("settings","settings")}\n    </div>`)}function i(t,e,s,n,a){return`<div class="settingCard cardQustion animateElem">\n            <img class="settingCard_img" src="./images/settings/${t}" alt="${t}">\n          <div class="input-block">\n          <input id="${n}" class="${s}" type="${e}" max="100" min="0">\n          <label for="${n}" data-on-label="On" data-off-label="Off"></label>\n          </div>\n            <p class="settingCard_text">${a}</p>\n    </div>`}function r(t){return`<p class="subtitle animateElem">${t}</p>`}function o(t){e('<img class="logo animateElem" src="./images/main-pg/logo/logo.png" alt="logo">'),e(r("settings")),root.insertAdjacentHTML("beforeend",`<div class="container">\n      <div class="wrapper setting-block">\n        ${i("volume.svg","range","inputVolume","volumeInput","volume")}\n        ${i("timer.svg","checkbox","inputTimer","timerCheckBox","timer")}\n      </div>\n    </div>`),root.insertAdjacentHTML("beforeend",`<div class="container">\n      ${s("setting-btn","save")}\n    </div>`),function(t){const e=document.getElementById("timerCheckBox");!0===JSON.parse(localStorage.getItem("settings")).timer?e.checked=!0:e.checked=!1}(),function(t){const e=document.getElementById("volumeInput");let s=JSON.parse(localStorage.getItem("settings"));e.value=s.volume}(),function(t){const e=document.getElementById("timerCheckBox");e.addEventListener("change",(()=>{let t=JSON.parse(localStorage.getItem("settings"));t.timer=e.checked,localStorage.setItem("settings",JSON.stringify(t))}))}(),function(t){const e=document.getElementById("volumeInput");e.addEventListener("change",(()=>{let t=JSON.parse(localStorage.getItem("settings"));t.volume=Number(e.value),localStorage.setItem("settings",JSON.stringify(t))}))}()}class c{constructor(t,e,s,n){this.num=t,this.result=e,this.imgName=s,this.flag=n}createCard(){return"0"!==this.result?`\n          <div class="card ${this.flag} animateElem" num="${this.num}">\n                  <div class="cardNum">${this.num}<span>Round</span></div>\n                  <span class="cardCounter">${this.result} / 10</span>\n                  <img class="cardImg" src="./images/img/${this.imgName}"  alt="cardImg">\n          </div>`:`\n          <div class="card ${this.flag} animateElem" num="${this.num}">\n              <div class="card-filter"></div>\n                  <div class="cardNum">${this.num}<span>Round</span></div>\n                  <span class="cardCounter">${this.result} / 10</span>\n                  <img class="cardImg" src="./images/img/${this.imgName}"  alt="cardImg">\n          </div>`}}function l(t){return JSON.parse(localStorage.getItem(`${t}`))}function m(t){e('<img class="logo animateElem" src="./images/main-pg/logo/logo.png" alt="logo">'),e(r("rounds")),root.insertAdjacentHTML("beforeend",'<div class="container">\n    <div class="rounds-block">\n  </div>\n  </div>'),(t=>{let e=t.replace("dataGame","");const s=document.querySelector(".rounds-block"),n=l(t);for(let t=1;t<13;t++){let a=new c(`${t}`,`${n[t].scoreLastGame}`,t-1+".jpg",e);s.insertAdjacentHTML("beforeend",`${a.createCard()}`),n[t].answer=[],n[t].result=0}localStorage.setItem(t,JSON.stringify(n))})(t)}function d(t,e){root.insertAdjacentHTML("beforeend",`<div class= "container">\n      <div class="question-header">\n              <img class="question-header_logo" src="./images/main-pg/logo/logo.png" alt="logo">\n              <p class="question">${t} <span id="author">${e}</span>?</p>\n              <div class="timer">\n                  <img src="./images/settings/timer.svg" alt="timer">\n                  <p class="currentTime">OFF</p>\n              </div>\n      </div>\n      </div>`)}class u{constructor(t){this.answers=t,this.path=`https://github.com/SergeyKozlovskiy/ART-QUIZ/blob/master/img/${this.answers[0].imageNum}.jpg`}createPictures(){return`<div class="container">\n    <div class="pictures-block">\n        <img class="animateElem" src="./images/img/${this.answers[0].imageNum}.jpg" alt="img">\n        <img class="animateElem" src="./images/img/${this.answers[1].imageNum}.jpg" alt="img">\n        <img class="animateElem" src="./images/img/${this.answers[2].imageNum}.jpg" alt="img">\n        <img class="animateElem" src="./images/img/${this.answers[3].imageNum}.jpg" alt="img">\n        </div>\n    </div>`}}class g{constructor(t){this.answers=t}createAnswerBtn(){return`<div class="container">\n    <div class="answers">\n        <div class="box animateElem">\n          <div class="btn answer">${this.answers[0]}</div>\n        </div>\n        <div class="box animateElem">\n          <div class="btn answer">${this.answers[1]}</div>\n        </div>\n        <div class="box animateElem">\n          <div class="btn answer">${this.answers[2]}</div>\n        </div>\n        <div class="box animateElem">\n          <div class="btn answer">${this.answers[3]}</div>\n        </div>\n    </div>\n</div>`}}async function v(t){let e=await fetch("./images/data.json");if(e.ok)return await e.json();console.log("Ошибка HTTP: "+e.status)}function p(t){switch(t){case"1":return 1;case"2":return 11;case"3":return 21;case"4":return 31;case"5":return 41;case"6":return 51;case" 7":return 61;case"8":return 71;case"9":return 81;case"10":return 91;case"11":return 101;case"12":return 111;default:console.log("Error")}}function h(t,e){let s=[],n=t-1,a=n+10;for(let t=n;t<a;t++)s.push(e[t]);return s}function f(t,e){let s=[];s.push(t);for(let n=0;n<3;n++){let a=e[(0,240,Math.floor(241*Math.random())+0)];t.imageNum!==a.imageNum?s.push(a):--n}return function(t){for(let e=t.length-1;e>0;e--){let s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t}(s)}function w(t,e){document.querySelectorAll(".control-point")[e].classList.add(`${t}`)}function $(t,e,s,n){let a=l(t);a[e].answer.push(s),a[e].result+=n,localStorage.setItem(t,JSON.stringify(a))}function L(t){document.querySelectorAll(".animateElem").forEach((e=>{e.classList.remove(`${t}`)})),setTimeout((()=>{root.innerHTML=""}),300)}function S(t){document.querySelectorAll(".animateElem").forEach(((e,s)=>{let n=15*s;e.style.transitionDelay=`${n}ms`,e.classList.add(`${t}`)}))}function b(t,e,s,n){t(e,s,n),setTimeout(S,300,"show")}class I{constructor(t,e,s,n,a){this.pathImg=t,this.answer=e,this.author=s,this.name=n,this.year=a}createCard(){return this.answer?`<div class="results-card">\n          <img class="results-card__img color-img" src="./images/img/${this.pathImg}.jpg" alt="img" ><div class="info">\n              <p>${this.author}</p>\n              <p>${this.name}</p>\n              <p>${this.year}</p>\n          </div>\n      </div>`:`<div class="results-card">\n          <img class="results-card__img" src="./images/img/${this.pathImg}.jpg" alt="img" ><div class="info">\n              <p>${this.author}</p>\n              <p>${this.name}</p>\n              <p>${this.year}</p>\n          </div>\n      </div>`}}function E(t,s,n){let a=l(`${n}`);e('<img class="logo animateElem" src="./images/main-pg/logo/logo.png" alt="logo">'),e(r("score")),root.insertAdjacentHTML("beforeend",'<div class="container">\n    <div class="results">\n  </div>\n  </div>'),((t,e,s,n)=>{const a=document.querySelector(".results");for(let n=0;n<10;n++){let i=new I(t[n].imageNum,s[e].answer[n],t[n].author,t[n].name,t[n].year);a.insertAdjacentHTML("beforeend",`${i.createCard()}`)}})(t,s,a),e(`<p class="score animateElem">score: ${a[s].result} / 10</p>`)}function T(t,e){let s=l(t);s[e].scoreLastGame=s[e].result,localStorage.setItem(t,JSON.stringify(s))}function y(t,e){return`  <div class="modal">\n                <p class="modal-text">score<br>${t}/10</p>\n                <img src="./images/madal/cup-icon.png" alt="img">\n                <button class="modal-btn">next</button>\n            </div>`}document.addEventListener("click",(t=>{let e=t.target;e.classList.contains("results-card__img")&&e.nextSibling.classList.toggle("show_info")}));let A,N,Q,G,C,j,x,z,P,k=!1,q=0,O=0;function M(t){if(d("Кто автор этой картины",""),P=l("settings"),P.timer){let t=document.querySelector(".currentTime");z=B(t,"artistQuiz")}k=!0,A=t,G=p(t),N=h(G,Q),C=N[q].author,j=f(N[q],Q),x=j.map((t=>t.author));let s=new g(x);e(`<div class = "container">\n            <div class="wrapper-img">\n                <img class="artistQuizImg animateElem" src="./images/img/${N[q].imageNum}.jpg" alt="img">\n            </div>\n        </div>`),e('<div class ="container">\n  <div class="control">\n    <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n</div>\n  </div>'),e(s.createAnswerBtn())}v().then((t=>Q=t),(t=>console.log(t)));const _=()=>{const t=document.querySelector(".artistQuizImg "),e=document.querySelectorAll(".answer");j=f(N[q],Q),C=N[q].author,t.classList.remove("show"),setTimeout((()=>{t.setAttribute("src",`./images/img/${N[q].imageNum}.jpg`),t.classList.add("show")}),300),e.forEach(((t,e)=>{t.textContent=`${j[e].author}`}))};document.addEventListener("click",(t=>{let e=t.target;e.classList.contains("answer")&&!0===k&&e.textContent===C?9!==q?($("dataGameArtistQuiz",A,!0,1),w("right-answer",q),q++,O+=1,_()):J():e.classList.contains("answer")&&!0===k&&e.textContent!==C&&(9!==q?($("dataGameArtistQuiz",A,!1,0),w("wrong-answer",q),q++,_()):J())}));const J=()=>{e(y(O)),setTimeout((()=>{document.querySelector(".modal").classList.add("show-modal")}),300),document.querySelector(".modal-btn").addEventListener("click",(()=>{T("dataGameArtistQuiz",A),clearTimeout(z),q=0,O=0,k=!1,L("show"),setTimeout(b,400,E,N,A,"dataGameArtistQuiz")}))};function B(t,e){let s,n=3,a=0;t.textContent=`${n} : 00`;let i=setInterval((()=>{0===n&&0===a?(clearTimeout(i),"pictureQuiz"===e?st():M(),showResult()):0===a?(n--,a=60,a--,void 0!==s&&(t.textContent=s)):(t.textContent=s,a--),s=1===String(a).length?`${n} : 0${a}`:`${n} : ${a}`}),1e3);return i}function H(){let t=l("settings");const e={right:new Audio("./sounds/right.mp3"),wrong:new Audio("./sounds/wrong.mp3"),result:new Audio("./sounds/result.mp3")};for(let s in e)e[s].volume=t.volume/100;return e}let R,U,Z,D,F,K,V,W,X,Y=!1,tt=0,et=0;function st(t){X=l("settings"),Y=!0,K=t,R=p(t),Z=h(R,U),D=f(Z[tt],U),F=Z[tt].name,d("Какую из картин написал",Z[tt].author),V=D.map((t=>t.name));let s=new u(D),n=new g(V);if(e(s.createPictures()),e('<div class ="container">\n  <div class="control">\n    <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n   <div class="control-point"></div>\n</div>\n  </div>'),e(n.createAnswerBtn()),X.timer){let t=document.querySelector(".currentTime");W=B(t,"pictureQuiz")}}v().then((t=>U=t),(t=>console.log(t)));const nt=()=>{const t=document.querySelectorAll(".pictures-block>img"),e=document.querySelectorAll(".answer"),s=document.getElementById("author");D=f(Z[tt],U),F=Z[tt].name,s.textContent=`${Z[tt].author}`,t.forEach(((t,e)=>{t.classList.remove("show"),setTimeout((()=>{t.setAttribute("src",`./images/img/${D[e].imageNum}.jpg`),t.classList.add("show")}),300)})),e.forEach(((t,e)=>{t.textContent=`${D[e].name}`}))};document.addEventListener("click",(t=>{let e=t.target;e.classList.contains("answer")&&!0===Y&&e.textContent===F?9!==tt?(H().right.play(),et+=1,$("dataGamePictureQuiz",K,!0,1),w("right-answer",tt),tt++,nt()):(H().result.play(),at()):e.classList.contains("answer")&&!0===Y&&e.textContent!==F&&(9!==tt?(H().wrong.play(),$("dataGamePictureQuiz",K,!1,0),w("wrong-answer",tt),tt++,nt()):(H().result.play(),at()))}));const at=()=>{e(y(et)),setTimeout((()=>{document.querySelector(".modal").classList.add("show-modal")}),300),document.querySelector(".modal-btn").addEventListener("click",(()=>{T("dataGamePictureQuiz",K),clearTimeout(W),et=0,tt=0,Y=!1,L("show"),setTimeout(b,400,E,Z,K,"dataGamePictureQuiz")}))};document.addEventListener("DOMContentLoaded",(()=>{let t="mainPg";!function(t){const e={1:{answer:[],result:0,scoreLastGame:0},2:{answer:[],result:0,scoreLastGame:0},3:{answer:[],result:0,scoreLastGame:0},4:{answer:[],result:0,scoreLastGame:0},5:{answer:[],result:0,scoreLastGame:0},6:{answer:[],result:0,scoreLastGame:0},7:{answer:[],result:0,scoreLastGame:0},8:{answer:[],result:0,scoreLastGame:0},9:{answer:[],result:0,scoreLastGame:0},10:{answer:[],result:0,scoreLastGame:0},11:{answer:[],result:0,scoreLastGame:0},12:{answer:[],result:0,scoreLastGame:0}};localStorage.getItem("dataGamePictureQuiz")&&localStorage.getItem("dataGameArtistQuiz")&&localStorage.getItem("settings")||(localStorage.setItem("dataGamePictureQuiz",JSON.stringify(e)),localStorage.setItem("dataGameArtistQuiz",JSON.stringify(e)),localStorage.setItem("settings",JSON.stringify({timer:!1,volume:50})))}();let e=(t,e)=>{t(e),setTimeout(S,300,"show")};e(a),document.addEventListener("click",(s=>{let n=s.target;if(n.classList.contains("settings"))L("show"),setTimeout((()=>{e(o)}),400),t="settingPg";else if((n.classList.contains("logo")||n.classList.contains("setting-btn"))&&"mainPg"!==t)L("show"),setTimeout((()=>{e(a)}),400),t="mainPg";else if(n.classList.contains("PICTURES_QUIZ"))L("show"),setTimeout((()=>{e(m,"dataGamePictureQuiz")}),400),t="roundsPg";else if(n.classList.contains("ARTISTS_QUIZ"))L("show"),setTimeout((()=>{e(m,"dataGameArtistQuiz")}),400),t="roundsPg";else if(n.parentNode.classList.contains("PictureQuiz")){let s=n.parentNode.getAttribute("num");L("show"),setTimeout((()=>{e(st,s)}),400),t="picturesPg"}else if(n.parentNode.classList.contains("ArtistQuiz")){let s=n.parentNode.getAttribute("num");L("show"),setTimeout((()=>{e(M,s)}),400),t="artistsPg"}}))}))})();