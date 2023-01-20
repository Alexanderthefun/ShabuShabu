import { getBroths } from "./database.js";

export const showBroths = () => {
    const broths = getBroths();
    let html = `<div class="allBroths">`
    for (const broth of broths) {
        if (broth.canBeVegetarian && broth.spicy) {
            html += `<div class="soup" id="${broth.id}"><h3> ${broth.name} 🌱 🌶 </h3>\n ${broth.description}</div>`
        }
        else if (broth.canBeVegetarian && !broth.spicy) {
            html += `<div class="soup" id="${broth.id}"><h3> ${broth.name} 🌱 </h3>\n ${broth.description}</div>`
        }
        else if (!broth.canBeVegetarian && broth.spicy) {
            html += `<div class="soup" id="${broth.id}"><h3> ${broth.name} 🌶 </h3>\n ${broth.description}</div>`
        }
        else {
            html += `<div class="soup" id="${broth.id}"><h3> ${broth.name} </h3>\n ${broth.description}</div>`
        }
    }
    html += `</div>`
    return html
}

// const simpleShowBroths = () => {
//     let html = `
//         <ul>
//             ${broths.map(broth => {
//                 return `
//                 <li id="${broth.id}" class="singleBroths"> ${broth.name} </li>`
//             })}
//     `
// }