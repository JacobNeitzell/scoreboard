let healthCount = 0



function addHealth() {
  healthCount++
  draw()
}

function draw() {
  // @ts-ignore
  document.getElementById('healthCount').innerHTML = ` 
      <div>
      ${healthCount}
      </div>`
}










