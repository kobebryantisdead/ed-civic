let totalBet = 0;

function placeBet() {
    let betInput = document.getElementById("bet");
    let betAmount = Number(betInput.value);

    if (betAmount <= 0 || isNaN(betAmount)) {
        alert("Inserisci una scommessa valida!");
        return;
    }

    totalBet += betAmount;

    alert(
        "Hai scommesso " + betAmount + " dollari!\n" +
        "Totale scommesso: " + totalBet + " dollari."
    );


    betInput.value = "";
}