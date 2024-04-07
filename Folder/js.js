'use strict'

    let area = document.getElementById('area')
    let rect = document.getElementById('rect')

    let shiftX = event.clientX - rect.getBoundingClientRect().left
    let shiftY = event.clientY - rect.getBoundingClientRect().top

    function elemdrag(event) {
        console.log("Нажата")

        rect.style.position = 'absolute'

        document.addEventListener('mousemove', elemMove)
    }

    function elemdrop(event) {
        console.log("Отжата")
        document.removeEventListener('mousemove', elemMove)
    }

    function elemMove(event) {
        console.log(event.offsetX, event.offsetY)
        moveAt(event.pageX, event.pageY)
    }

    function moveAt (pageX, pageY) {
        rect.style.left = pageX - rect.offsetWidth / 2 + 'px'
        rect.style.top = pageY - rect.offsetHeight / 2 + 'px'
    }

    rect.onmousedown = elemdrag
    rect.ondragstart = function() {return false}
