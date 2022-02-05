const buttons = document.querySelectorAll("li.button")
const links = [
    "https://www.instagram.com/bhaswar.py/",
    "https://twitter.com/DenisovichPy",
    "https://github.com/DenisovichDev",
    "mailto:little.denisovich@gmail.com",
    "https://www.fxhash.xyz/u/Denisovich",
]

for (let i = 0; i < buttons.length; i++) {
    const b = buttons[i]

    b.addEventListener("click", (e) => {
        b.classList.add("big-button")
        let icon = b.firstElementChild
        icon.setAttribute("fill", "black")
        window.open(links[i], "_self")
    })
}
