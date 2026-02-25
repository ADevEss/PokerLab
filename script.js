
const  calculateOdds = () => {
    const pot = parseFloat(inputPot.value);
    const call = parseFloat(inputCall.value);
    if (pot > 0 && call > 0) {
        
        let percent  = (call/(pot + call) * 100);
      
        
        // Et injecte le résultat dans ton span :
        resultatCote.innerText = percent.toFixed(1) + "%";

    } else {
        // Si les cases sont vides, on remet à zéro
        resultatCote.innerText = "0%";
    }

    
}
const calculateKO = () => {
    

}


const btnCote = document.getElementById('btn-cote');
const viewOdds = document.getElementById('view-odds');

const viewKo = document.getElementById('view-ko');
const btnKo = document.getElementById('btn-ko');

const inputPot = document.getElementById('input-pot');
const inputCall = document.getElementById('input-call');
const resultatCote = document.getElementById('resultat-cote');


btnCote.addEventListener('click', ()=> {
    viewKo.classList.add('hidden');
    viewOdds.classList.remove('hidden');
    
   
    btnKo.classList.remove('active');
    btnCote.classList.add('active'); 
})


btnKo.addEventListener('click', ()=> {
    viewKo.classList.remove('hidden');
    viewOdds.classList.add('hidden');

    
    btnCote.classList.remove('active');
    btnKo.classList.add('active');
})

// On pose un "détecteur" sur la case du Pot
inputPot.addEventListener('input', calculateOdds);

// On pose un "détecteur" sur la case du Call
inputCall.addEventListener('input', calculateOdds);