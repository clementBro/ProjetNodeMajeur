const firebaseService = require('service/FirebaseService');

const service = new firebaseService();


function loadTickets(){
    const tickets = service.getAllTickets()
    tickets.forEach(function (ticket){
        document.getElementById('#ticketList').innerHTML += "<li>" + ticket.message + "</li>"
    })
}

