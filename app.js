let healthCount1 = 0
let healthCount2 = 0

function addHealth1() {
  healthCount1++
  draw()
}

function remHealth1() {
  healthCount1--
  drawfrom()
}
function draw() {
  // @ts-ignore
  document.getElementById('healthCount1').innerHTML = ` 
      <div>
      ${healthCount1}
      </div>`
}

function drawfrom() {
  // @ts-ignore
  document.getElementById('healthCount1').innerHTML = ` 
      <div>
      ${healthCount1}
      </div>`
}

function addHealth2() {
  healthCount2++
  draw2()
}

function remHealth2() {
  healthCount2--
  drawfrom2()
}


function draw2() {
  // @ts-ignore
  document.getElementById('healthCount2').innerHTML = ` 
      <div>
      ${healthCount2}
      </div>`
}

function drawfrom2() {
  // @ts-ignore
  document.getElementById('healthCount2').innerHTML = ` 
      <div>
      ${healthCount2}
      </div>`
}





