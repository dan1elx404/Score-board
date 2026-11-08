
let hscoreEl = document.getElementById("homeScore")

let score = 0

function one() {
    score = score + 1
    hscoreEl.innerText = score
}
function two(){
  score = score + 2
  hscoreEl.innerText = score
}
function three(){
  score = score + 3
  hscoreEl.innerText = score
}

let ascoreEl = document.getElementById("awayScore")
let score2 = 0

function one_a() {
    score2 = score2 + 1
    ascoreEl.innerText = score2
}
function two_a(){
  score2 = score2 + 2
  ascoreEl.innerText = score2
}
function three_a(){
  score2 = score2 + 3
  ascoreEl.innerText = score2
}