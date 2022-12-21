let taps = document.querySelectorAll("ul li")
let tapsArray = Array.from(taps)
let divs = document.querySelectorAll(".divs div")
let divsArray = Array.from(divs)


tapsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tapsArray.forEach((ele) => {
            ele.classList.remove("active")
        })
        divsArray.forEach((div) => {
            div.style.display = "none"
        })
        e.currentTarget.classList.add("active")
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
            
    })
});




// //                                  Random Element in an Array


// let arr = ["Aba Al-Fadel", "Abbas", "Sajjad", "Mohammed"];

// let random = arr[Math.trunc(Math.random() * arr.length)]

// console.log(random)













