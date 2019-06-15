document.addEventListener("DOMContentLoaded", () => {
    let a = document.querySelectorAll('a');
    const baseReg = new RegExp(window.location.origin);
    a.forEach((node) => {
        if (!baseReg.test(node.href)) {
            node.target = '_blank';
        }
    });
});
