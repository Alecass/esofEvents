const motivoSpesa = document.querySelector('#motivo-spesa')
const importoSpesa = document.querySelector('#importo-spesa')

const cancellaBtn = document.querySelector('#cancella-btn')
const aggiungiBtn = document.querySelector('#aggiungi-btn')

const speseList = document.querySelector('#list-spesa')

const speseTotaliOutput = document.querySelector('#spese-totali')

let spesaTotale = 0

const alertController = document.querySelector('ion-alert-controller')

const cancella = () =>{
    motivoSpesa.value = ''
    importoSpesa.value = ''
}

cancellaBtn.addEventListener('click' ,cancella)
aggiungiBtn.addEventListener('click', () => {

    const motivoInserito = motivoSpesa.value
    const importoInserito = importoSpesa.value

    if(importoInserito<=0 || importoInserito.trim().lenght <=0 || motivoInserito.trim().lenght <= 0 ){
        alertController.create({
            message: 'Perfavore immettere valori validi',
            header: 'Valori non validi',
            buttons: ['ok']
        }).then(alertElem =>{
            alertElem.present()
        })
        return
    }

    const nuovoElem = document.createElement('ion-item')
    nuovoElem.textContent = motivoInserito + ' : '+ importoInserito + '€'
    speseList.appendChild(nuovoElem)
// + variabile stringa la trasforma in numero
    spesaTotale += +importoInserito
    speseTotaliOutput.textContent = spesaTotale
    cancella()
})