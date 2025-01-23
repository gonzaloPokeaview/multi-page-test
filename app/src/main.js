import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


const main = () => {
  if(document.querySelector('#app')) {
  document.querySelector('#app').innerHTML = `
  <header>
    <h1>Multi Page Test</h1>
  </header>
  <main>
    <div id="counter"></div>
    <img src="${javascriptLogo}" alt="JavaScript Logo" />
    <img src="${viteLogo}" alt="Vite Logo" />
    <a href="./src/other.html">Go to other page</a>
  </main>
`


setupCounter(document.querySelector('#counter'))
} else{
  const other = document.querySelector('#other')  
  other.addEventListener('click', () => {
    console.log('other page clicked')
    other.innerHTML = 'other page clicked'
  })
}
  
} 

main()