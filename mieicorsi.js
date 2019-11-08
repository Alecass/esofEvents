const nomeCorso = document.querySelector('#nome-corso')
const punteggioCorso = document.querySelector('#punteggio-corso')

const cancellaBtn = document.querySelector('#cancella-btn')
const aggiungiBtn = document.querySelector('#aggiungi-btn')

const corsiList = document.querySelector('#list-corsi')

const alertController = document.querySelector('ion-alert-controller')

const mediaOutput = document.querySelector('#media')

let media = 0;
let sommaPunteggi = 0;

const messages = ['Per favore immettere un nome valido','Per favore immettere un valore compreso tra 0-5,perfavore immettere valori validi']

const cancella = () =>{
    nomeCorso.value = ''
    punteggioCorso.value = ''
}

cancellaBtn.addEventListener('click' ,cancella)
aggiungiBtn.addEventListener('click', () => {

    const nomeInserito = nomeCorso.value
    const punteggioInserito = punteggioCorso.value

    if(punteggioInserito <= 0 || punteggioInserito.trim().lenght <= 0  || punteggioInserito > 5 || nomeInserito.trim().lenght <= 0){
        
        alertController.create({
            message: messages[2],
            header: 'Valori non validi',
            buttons: ['ok']
        }).then(alertElem =>{
            alertElem.present()
        })
        return
    }

    const nuovoElem = document.createElement('ion-item')
    nuovoElem.style="font-weight:bold"
    nuovoElem.style.color="blue"
    nuovoElem.textContent = nomeInserito + ' : ' + punteggioInserito
    corsiList.appendChild(nuovoElem)

    const star = document.createElement('ion-icon')
    star.name = "star"
    star.style.color = "orange"
    nuovoElem.appendChild(star)

    media += +punteggioInserito
    sommaPunteggi += 1
    mediaOutput.textContent = media/sommaPunteggi
    cancella()
})