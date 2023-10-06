const justifyBtns = document.querySelectorAll(".justify-btns button")
const alignBtns = document.querySelectorAll(".align-btns button")


let container = document.querySelector(".container")


justifyBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        justifyBtns.forEach((btn) => {
            btn.style.backgroundColor = "unset"
            btn.style.color = "unset"
        })
        const jcValue = this.innerHTML;
        container.style.justifyContent = jcValue
        this.style.backgroundColor = "black"
        this.style.color = "white"
    })
})

alignBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        alignBtns.forEach((btn) => {
            btn.style.backgroundColor = "unset"
            btn.style.color = "unset"
        })
        const jcValue = this.innerHTML;
        container.style.alignItems = jcValue
        this.style.backgroundColor = "black"
        this.style.color = "white"
    })
})

document.getElementById("show-code").addEventListener("click", () => {

    const newStyle = container.style.cssText;
    const newStyleSplited = newStyle.split("; ").join(";\n       ");

    const styles = `{
        display: flex;
        gap: 10px;
        background-color: lightgray;
        height: 800px;
       ${newStyleSplited}
}`

    alert(styles)
})


// document.getElementById("show-code").addEventListener("click", () => {

//     const newStyle = container.style.cssText;

//     const styles = `{
//             display: flex;
//             gap: 10px;
//             background-color: lightgray;
//             height: 800px;
//             justify-content: ${container.style.justifyContent || "start"};
//             align-items: ${container.style.alignItems || "start"};
//     }`

//     alert(styles)
// })