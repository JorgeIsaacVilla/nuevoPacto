/*Script para eventos de la iglesia (inicio) */
const boxEvent = document.querySelector('.box-events');
/*
            <div class="box-events-descriptions">
                <div class="box-data-event">
                    <div class="event-name">
                        <img src="./data/img/icons/caleddary.svg" alt="imagen icono de calendario">
                        <p>Reunión de mujeres</p>
                    </div>
                </div>
                <p class="class-event">Heridas Sanadoras</p>
                <p class="date-event">marzo 30, 8:00 am</p>
            </div>
*/
const iglesiaEvents = [];

iglesiaEvents.push({
    altImg:'Calendario Reunion de mujeres.',
    activity:'Reunión de mujeres',
    tittleEvent:'Heridas Sanadoras',
    date:'marzo 30, 8:00 am',
});
iglesiaEvents.push({
    altImg:'Calendario Reunion de mujeres.',
    activity:'Reunión de mujeres',
    tittleEvent:'Heridas Sanadoras',
    date:'marzo 30, 8:00 am',
});
iglesiaEvents.push({
    altImg:'Calendario Reunion de mujeres.',
    activity:'Reunión de mujeres',
    tittleEvent:'Heridas Sanadoras',
    date:'marzo 30, 8:00 am',
});

function renderEvents(arr) {
    for(events of arr){
        const boxEventDescriptions = document.createElement('div');
        boxEventDescriptions.classList.add('box-events-descriptions');
        boxEvent.appendChild(boxEventDescriptions);
        
        const boxDataEvent = document.createElement('div');
        boxDataEvent.classList.add('box-data-event');
        boxEventDescriptions.appendChild(boxDataEvent);

        const eventName = document.createElement('div');
        eventName.classList.add('event-name');
        boxDataEvent.appendChild(eventName);

        const imageEvent = document.createElement('img');
        imageEvent.setAttribute('src', './data/img/icons/caleddary.svg');
        imageEvent.setAttribute('alt', events.altImg);
        const textEvent = document.createElement('p');
        textEvent.innerText = events.activity;
        eventName.appendChild(imageEvent);
        eventName.appendChild(textEvent);

        const classEvent = document.createElement('p');
        classEvent.classList.add('class-event');
        classEvent.innerText = events.tittleEvent;
        const dataEvent = document.createElement('p');
        dataEvent.classList.add('date-event');
        dataEvent.innerText = events.date;
        boxEventDescriptions.appendChild(classEvent);
        boxEventDescriptions.appendChild(dataEvent);
    }    
}
renderEvents(iglesiaEvents);
/*Script para eventos de la iglesia (fin) */

/*Script para miembros de la iglesia (inicio) */
const photos = document.querySelector('.photos');
/*
                <div class="member-image">
                    <img src="./data/img/fouth/miembros/miembro1.svg" alt="miembro 1">
                    <p>Lorem ipsum</p>
                </div>
*/

/*Script para miembros de la iglesia (fin) */