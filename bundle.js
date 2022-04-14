(()=>{var e={420:e=>{e.exports={calculateChange:(e,t)=>e-t,isSufficientPayment:(e,t)=>t>=e,calculateTotal:e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n].price;return t},addItem:(e,t,n)=>{e.push({name:t,price:n})},removeItem:(e,t)=>{e.splice(t,1)}}},842:e=>{e.exports={formatCurrency:e=>e>=0?"$"+(e=e.toFixed(2)).toString():"-$"+(e=(e*=-1).toFixed(2)).toString(),getCoins:e=>{let t=Math.floor(e/25),n=(e-25*t).toFixed(2),r=Math.floor(n/10);n=(n-10*r).toFixed(2);let i=Math.floor(n/5);return n=(n-5*i).toFixed(2),{Quarters:t,Dimes:r,Nickels:i,Pennies:Math.floor(n/1)}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{let{formatCurrency:e,getCoins:t}=n(842);const{addItem:r,calculateTotal:i,isSufficientPayment:o,calculateChange:a,removeItem:d}=n(420);e=e||(e=>e);const c=[{name:"Candy Bar",price:.95},{name:"Bag of Chips",price:1.29},{name:"Can of Soda",price:1.8},{name:"Bottle of Milk",price:3},{name:"Box of Cherries",price:5.13}];!function(){const n=document.getElementById("menu"),s=document.getElementById("selectedItems"),l=document.getElementById("total"),m=document.getElementById("cashInput"),u=document.getElementById("cashForm"),f=document.getElementById("changeDue"),g=document.getElementById("cashInserted"),h=document.getElementById("paymentInsufficientMessage"),p=document.getElementById("change"),x=p.querySelectorAll(".change-count"),I=document.getElementById("resetButton");c.forEach(((t,r)=>{n.insertAdjacentHTML("beforeend",`<li>${e(t.price)} - ${t.name}\n        <button data-index="${r}">Buy</button>\n      </li>`)}));let y=[];function B(){s.innerHTML="",y.forEach(((t,n)=>{s.insertAdjacentHTML("beforeend",`<tr>\n        <td>${t.name}</td>\n        <td>${e(t.price)}</td>\n        <td><button data-index="${n}">Remove</button></td>\n      </tr>`)}));const t=i(y);l.innerText=e(t)}n.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));if(!isNaN(t)){const e=c[t];r(y,e.name,e.price),B()}})),s.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(d(y,t),B())})),u.addEventListener("submit",(n=>{n.preventDefault();const r=Number(m.value)||0,d=i(y);let c=0;try{c=a(d,r)}catch(n){console.error(n)}if(g.innerText=e(r),f.innerText=e(c),o(d,r)){const e=t(Math.round(100*c));x[0].innerText=e.quarters,x[1].innerText=e.dimes,x[2].innerText=e.nickels,x[3].innerText=e.pennies,p.hidden=!1,h.hidden=!0}else p.hidden=!0,h.hidden=!1})),I.addEventListener("click",(()=>{y=[],B(),m.value="",g.innerText="",f.innerText="",p.hidden=!0,h.hidden=!0}))}()})()})();