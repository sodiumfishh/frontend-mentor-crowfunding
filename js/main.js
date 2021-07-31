const bookmarkBtn = document.querySelector("#bookmark-btn")
const rewardSelectionBtn = document.querySelectorAll(".reward-selection-btn")

let bookmarkState = false

bookmarkBtn.addEventListener("click", e => {
  bookmarkState = !bookmarkState
  bookmarkStyle()
})

const bookmarkStyle = () => {
  if (bookmarkState) {
    bookmarkBtn.childNodes[2].innerHTML = "Bookmarked"
    bookmarkBtn.classList.add("bookmarked")
  } else {
    bookmarkBtn.childNodes[2].innerHTML = "Bookmark"
    bookmarkBtn.classList.remove("bookmarked")
  }
}

rewardSelectionBtn.forEach(button => {
  button.addEventListener("click", e => {
    document.querySelector(".reward-modal-container").classList.add("show-modal")
  })
})

const btndd = document.querySelector("#close-modal-btn-1")
console.log(btndd)
btndd.addEventListener("click", () => document.querySelector(".reward-modal-container").classList.remove("show-modal"))




//PLEDGE FORM
const backThisProjectBtn = document.querySelector("#support-project-btn")
const closePledgeModalBtn = document.querySelector("#close-support-modal")
const modalParent = document.querySelector(".support-modal-container")
const Pledgeform = document.querySelector('#pledge-form')
const pledgeParentDivs = document.querySelectorAll(".pledge-parent")

Pledgeform.addEventListener("change", e => {
  pledgeParentDivs.forEach(element => {
    if (element.getAttribute("data-pledge") == e.target.id) {
      element.classList.add("selected")
    } else {
      element.classList.remove("selected")
    }
  })
})

backThisProjectBtn.addEventListener("click", () => {
  modalParent.classList.add("show-modal")
})

closePledgeModalBtn.addEventListener("click", () => {
  modalParent.classList.remove("show-modal")
})


//SHOW MENU
const ul = document.querySelector("ul")
const menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
  ul.classList.toggle("show")
})