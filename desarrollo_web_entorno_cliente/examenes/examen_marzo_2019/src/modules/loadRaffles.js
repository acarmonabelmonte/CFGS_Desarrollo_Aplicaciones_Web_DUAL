import { raffles } from '../../data/raffles';
import { assignButton } from './button';
import { saveMark, loadMarks } from './localstorage';

function loadRaffles() {
    for ( let raffle in raffles ) {
        let rifas = document.getElementById('rifas');
        let rifa = document.createElement("div");
        var marcado = document.createElement("a");
        marcado.id = raffle;
        marcado.className = "nav-link";
        loadMarks(marcado.id, marcado);

        // marcar si has entrado en dicha tienda
        marcado.onclick = function () {
            if (this.innerHTML === "Mark as entered") {
                this.innerHTML = "Entered";
                saveMark(this.id, "Entered");
            } else {
                this.innerHTML = "Mark as entered";
                saveMark(this.id, "Mark as entered");
            };
        };

        // cargar contenido en rifa
        rifa.className = "col text-center";
        rifa.innerHTML = '<img src="' + raffles[raffle].logo + '"' + 'height="200" width="200">' + '<br>' +
                         '<b>' + raffle + '</b><br>' +
                         raffles[raffle].country + '<br>' +
                         raffles[raffle].purchase + '<br>' +
                         raffles[raffle].collection + '<br>' +
                         'Size - ' + raffles[raffle].Sizes + '<br>' +
                         'Opens - ' + raffles[raffle].Opens + '<br>' +
                         'Closes - ' + raffles[raffle].Closes + '<br>';

        rifas.appendChild(rifa);
        assignButton(raffles[raffle], rifa);
        rifa.appendChild(marcado);      
    };
};

export { loadRaffles }; 