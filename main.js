function generate_menu() {
    // get array of categories from menu data and iterate over it to generate html
    Object.keys(menu).forEach(
        category => {
            console.log(`category: ${category}`)

            var entry = document.createElement("tr")
            entry.innerHTML = `<th colspan="3">${category}</th>`
            html_menu.appendChild(entry)

            // iterate over dishes of coresponding category and generate html
            menu[category].forEach(
                dish => {
                    console.log(`${dish.id} ${dish.title} ${dish.subtitle} ${dish.special_ingedients} ${dish.price}`)

                    var entry = document.createElement("tr")
                    entry.innerHTML = `
                        <td>${dish.id}</td>
                        <td class="dish-description"><span class="dish-title">${dish.title}</span> ${dish.subtitle}<sup>${dish.special_ingedients}</sup></td>
                        <td>${dish.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</td>`
                    html_menu.appendChild(entry)
                }
            )
        }
    )
}
