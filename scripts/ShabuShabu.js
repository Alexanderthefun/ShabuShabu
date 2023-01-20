import { showBroths } from "./broths.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <div class="topPage">
        <h1 class="title"> Shabu Shabu Hotpot & Grill</h1>
    </div>
    <article>
        <div class="brothSection">
                <div class="index">
                <h2 id="broths">Hotpot Broths</h2>
                    <p>🌱 = Can be made vegetarian, please tell your server if you wish to do so.</p>
                    <p>🌶 = Spicy. Ask your server about spice level variants.</p>
                </div>
        </div>
        ${showBroths()}
    </article>
    `

mainContainer.innerHTML = applicationHTML