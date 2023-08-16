async function injectEruda() {
    const before_script = document.querySelector("#eruda-script");
    if (before_script) {
        before_script.remove();
    }
    const url = "https://cdn.jsdelivr.net/npm/eruda";
    const script = document.createElement("script");
    script.defer = "defer";
    script.src = url;
    script.id = "eruda-script";
    document.head.appendChild(script);
}

export function onLoad() {
    injectEruda();
    setTimeout(() => {
        eruda.init();
    }, 100);
}
