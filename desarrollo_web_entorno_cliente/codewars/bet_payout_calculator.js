/*
You are in charge of handling a series of bets based on coin flips, write a script that accepts the following params:

-probHeads: an array containing the win multiplier for Heads and the ammount of money currently on Heads
-probTails: an array containing the win multiplier for Tails and the ammount of money currently on Tails
-outcome: a string, either "Heads" or "Tails" that represents the winning bet
and return the proper string out of these 3:
"The outcome is [X], In total I have to pay [Y]$ to the winner, I broke even!"
"The outcome is [X], In total I have to pay [Y]$ to the winner, of which [Z]$ from my own pockets :("
"The outcome is [X], In total I have to pay [Y]$ to the winner, I have pocketed [Z]$ !"
you pocket all the money in the losing side of the bet, but have to pay out all the money in the winning side multiplied by the multiplier.
All numbers should be printed with 2 decimal values, for example:
10.00$
5.35$
945.10$
*/

/*
betHeads: [mult, money]
betTails: [mult, money]
outcome: "Heads"/"Tails";
*/

function calculatePayout(betHeads, betTails, outcome) {
    if (outcome == "Tails") {
        return "The outcome is " + outcome + ", In total I have to pay " + betTails[0].toString() + "$" + " to the winner," +
               " I have pocketed " + (betHeads[1] - betTails[0]).toString()  + "$" + " !";
    }
}

console.log(calculatePayout([5.2, 143],
    [4.25, 1],
    "Tails"));

console.assert(calculatePayout([5.2, 143],
                                         [4.25, 1],
                                        "Tails") == "The outcome is Tails, In total I have to pay 4.25$ to the winner, I have pocketed 138.75$ !");