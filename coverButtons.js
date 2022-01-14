const pages = [
    { name: "Home", href: "" },
    { name: "Tirukural", href: "tirukural" },
    { name: "Aathichudi", href: "aathichudi" }
]

window.addEventListener('load', () => {
    let coverElement = document.getElementById(window.coverElementID || 'cover');
    let divElement = document.createElement('div');
    let styleElement = document.createElement('style');

    divElement.setAttribute('style', 'margin-top: 10px;');

    for (const page of pages) {
        let elem = document.createElement('a');
        elem.innerHTML = page.name;
        elem.className = "cdn-cbtn"
        elem.href = `https://tamizhilakkiyam.github.io/${page.href}`;
        elem.target = "_blank";

        divElement.append(elem);
    }

    styleElement.innerHTML = `
    .cdn-cbtn { font-family: "Hind Madurai"; color: black; text-decoration: none; font-weight: bold; border-radius: 4px; background-color: white; padding: 5px 10px; cursor: pointer; margin-right: 5px; margin-top: 5px; }
    .cdn-cbtn:hover { background-color: black; color: white }
    `;

    coverElement.append(divElement, styleElement);
});