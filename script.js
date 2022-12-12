const question = document.querySelectorAll(".box-content")

question.forEach(function(item) {
    const write = document.querySelector(".but")
    write.addEventListener("click", function() {
        question.forEach(function(back) {
            if(back !== item) {
                item.classList.remove("paragrafo")
            }
        })
    })
})