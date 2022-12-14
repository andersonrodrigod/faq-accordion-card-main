const box = document.querySelectorAll(".box-content")

box.forEach(function(item) {
    const btn = item.querySelector(".but")
    const p = item.querySelectorAll(".paragrafo")
    btn.addEventListener("click", function() {
        p.forEach(function(e) {
            if(e !== item) {
                e.classList.remove(".paragrafo")
            }
            e.classList.toggle("paragrafo")
        })
        
    })
})