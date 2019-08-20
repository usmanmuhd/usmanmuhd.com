document.addEventListener("DOMContentLoaded", () => {
    let a = document.querySelectorAll('a');
    const baseReg = new RegExp(window.location.origin);
    a.forEach((node) => {
        if (!baseReg.test(node.href)) {
            node.target = '_blank';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const url = window.location.href;
    last_chars = url.slice(-11);
    console.log(last_chars);
    if (last_chars == '/index.html') {
        window.location.href = url.slice(0, -10)
    }
});
