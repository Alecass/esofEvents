const Calendar = require('./calendar.js')
const Speakers = require('./speakers.js')



Calendar.render()
Speakers.render()


//MAP INIT
console.log("MAP",L)
const myMap = L.map("mapView").setView([45.6493678,13.7756436],14)
console.log("MAP CUSTOM", myMap)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', 
    attribution: 'Powered by Alessio Cassano',
    maxzoom: 17
}).addTo(myMap);

const tabs = document.querySelector('#tabs')
tabs.addEventListener('ionTabsDidChange', (event) => {
    if(event.detail.tab === 'map'){
        
        setTimeout(() => {
            myMap.invalidateSize()
        },100)
    }
})
