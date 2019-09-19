$(document).ready(function () {
    $(".menu-top").click(function() {
        $(".menu-content").toggle();
    });
});

var appointments = {
    "17h00 21/09": {
      "title": "Oficina sobre o filme - Projeto Meninos e Meninas de rua",
      "person": "Rua Jurubatuba, 1610 - Centro - São Bernardo do Campo"
    },
    "17h00 25/09": {
      "title": "Universidade Federal do ABC",
      "person": "Alameda da Universidade, s/n - Anchieta - São Bernardo do Campo"
    },
    "17h00 28/09": {
      "title": "Conversa com a Equipe - Casa da Largatixa Preta",
      "person": "Rua Alcides de Queirós, 161 - Casa Branca - Santo André"
    },
    "17h00 29/09": {
      "title": "Sede da Associação de Moradores da Ocupação Mil e Um Nova Esperança",
      "person": "Jardim Laura - São Bernardo do Campo"
    }
}

// Cria uma variavel com o horario de agora e transforma em unix time
// https://pt.wikipedia.org/wiki/Unix_time
var now = (new Date()).getTime()

var smallestTimeDifference = Infinity

var redCircle = undefined

function createElementAndAddClass(element, classe) {
  var el = document.createElement(element)
  if (typeof classe !== "undefined") {
    el.classList.add(classe)
  }
  return el
}

for (var time in appointments) {
  var appointmentDiv = createElementAndAddClass("div", "appointment")

  var timeDiv = createElementAndAddClass("div", "time")
  var timeP = createElementAndAddClass("p")
  timeP.textContent = time
  timeDiv.appendChild(timeP)
  appointmentDiv.appendChild(timeDiv)

  var circleDiv = createElementAndAddClass("div", "circle")
  appointmentDiv.appendChild(circleDiv)

  var eventDiv = createElementAndAddClass("div", "event")
  var eventH3 = createElementAndAddClass("h3")
  eventH3.textContent = appointments[time]['title']
  var eventP = createElementAndAddClass("p")
  eventP.textContent = appointments[time]['person']
  eventDiv.appendChild(eventH3)
  eventDiv.appendChild(eventP)
  appointmentDiv.appendChild(eventDiv)  

  var scheduleDiv = document.getElementById("schedule")
  scheduleDiv.appendChild(appointmentDiv)

  var timeAppointment = new Date()
  // console.log(timeAppointment)

  timeAppointment.setHours(parseInt(time.split("h")[0]))

  timeAppointment.setMinutes(parseInt(time.split("h")[1]))

  timeAppointment.setMonth(parseInt(time.split("/")[1]))

  timeAppointment.setDate(parseInt(time.split("/")[0]))

  timeAppointment = timeAppointment.getTime()

  var timeDifference = Math.abs(timeAppointment - now)  

  if (timeDifference < smallestTimeDifference) {
    smallestTimeDifference = timeDifference
    redCircle = circleDiv
  }
}

redCircle.style.backgroundColor = "red"
  
  
  
  



