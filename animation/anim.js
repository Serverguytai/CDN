const animtions = "";
const copyBtn = document.querySelectorAll(".copybtn");
const IsAlert = document.querySelector(".alert");
const IsAlertText = document.querySelector(".alert-text");

copyBtn.forEach(copy => {
    const copyText = `animate-${copy.parentElement.children[0].children[0].innerText}`
    copy.addEventListener("click", (e) => {
           IsAlert.classList.remove("hidden")
           IsAlert.classList.add("animate-slideFromRight-05sec");
           IsAlertText.innerText = "Animation class: " + copyText
           setTimeout(() => {
            IsAlert.classList.remove("animate-slideFromRight-05sec");
            IsAlert.classList.add("animate-slideOutRight-05sec");
        },6000)
        setTimeout(() => {
            IsAlert.classList.add("hidden");
             IsAlert.classList.remove("animate-slideOutRight-05sec");
        },6500)
    })
})
