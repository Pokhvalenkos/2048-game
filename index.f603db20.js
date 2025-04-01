var t={};class e{static STATUS={IDLE:"idle",PLAYING:"playing",WIN:"win",LOSE:"lose"};constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.status=e.STATUS.IDLE,this.initialState=t,this.state=t.map(t=>[...t]),this.score=0}start(){this.status=e.STATUS.PLAYING,this.getRandomCell(),this.getRandomCell()}getRandomCell(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.state[e][s]&&t.push([e,s]);if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.state[e][s]=.9>Math.random()?2:4}}checkGameStatus(){let t=!1,s=!1;for(let a=0;a<4;a++)for(let i=0;i<4;i++){if(2048===this.state[a][i]){this.status=e.STATUS.WIN;return}0===this.state[a][i]&&(s=!0),i<3&&this.state[a][i]===this.state[a][i+1]&&(t=!0),a<3&&this.state[a][i]===this.state[a+1][i]&&(t=!0)}s||t||(this.status=e.STATUS.LOSE)}moveLeft(){if(this.status===e.STATUS.PLAYING){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=0;t<4;t++)0!==this.state[e][t]&&s.push(this.state[e][t]);for(;s.length<4;)s.push(0);for(let e=0;e<s.length-1;e++)s[e]===s[e+1]&&0!==s[e]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[e][s]!==a[s]&&(this.state[e][s]=a[s],t=!0)}t&&(this.getRandomCell(),this.checkGameStatus())}}moveRight(){if(this.status===e.STATUS.PLAYING){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=3;t>=0;t--)0!==this.state[e][t]&&s.push(this.state[e][t]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[e][s]!==a[3-s]&&(this.state[e][s]=a[3-s],t=!0)}t&&(this.getRandomCell(),this.checkGameStatus())}}moveUp(){if(this.status===e.STATUS.PLAYING){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=0;t<4;t++)0!==this.state[t][e]&&s.push(this.state[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[s][e]!==a[s]&&(this.state[s][e]=a[s],t=!0)}t&&(this.getRandomCell(),this.checkGameStatus())}}moveDown(){if(this.status===e.STATUS.PLAYING){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=3;t>=0;t--)0!==this.state[t][e]&&s.push(this.state[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,s[e+1]=0,this.score+=s[e],t=!0);let a=s.filter(t=>0!==t);for(;a.length<4;)a.push(0);for(let s=0;s<4;s++)this.state[s][e]!==a[3-s]&&(this.state[s][e]=a[3-s],t=!0)}t&&(this.getRandomCell(),this.checkGameStatus())}}restart(){this.status=e.STATUS.IDLE,this.state=this.initialState.map(t=>[...t]),this.score=0}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}}const s=new(t=e),a=document.querySelector(".start"),i=document.querySelector(".game-field"),l=document.querySelector(".game-score"),r=document.querySelector(".message-start"),h=document.querySelector(".message-win"),o=document.querySelector(".message-lose");function n(){i.innerHTML="";let t=s.getState();for(let e=0;e<4;e++){let s=document.createElement("tr");for(let a=0;a<4;a++){let i=document.createElement("td"),l=t[e][a];i.textContent=0===l?"":l,i.classList.add("field-cell"),0!==l&&i.classList.add(`field-cell--${l}`),s.appendChild(i)}i.appendChild(s)}}function c(){l.textContent=s.getScore()}function d(){s.status===t.STATUS.WIN?h.classList.remove("hidden"):s.status===t.STATUS.LOSE&&o.classList.remove("hidden")}a.addEventListener("click",()=>{a.classList.contains("start")?(s.start(),a.classList.remove("start"),a.classList.add("restart"),a.textContent="Restart",r.classList.add("hidden"),o.classList.add("hidden"),h.classList.add("hidden")):a.classList.contains("restart")&&(s.restart(),a.classList.remove("restart"),a.classList.add("start"),a.textContent="Start",r.classList.remove("hidden"),o.classList.add("hidden"),h.classList.add("hidden")),n(),c()}),document.addEventListener("keyup",e=>{if(s.status===t.STATUS.PLAYING){switch(e.key){case"ArrowUp":s.moveUp();break;case"ArrowRight":s.moveRight();break;case"ArrowDown":s.moveDown();break;case"ArrowLeft":s.moveLeft()}n(),c(),d()}}),n(),c(),d();
//# sourceMappingURL=index.f603db20.js.map
