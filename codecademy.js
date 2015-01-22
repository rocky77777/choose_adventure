var user = prompt("You're walking through a forest. You see a little squirrel with a broken leg. Do you 'HEAL' it, 'KILL' it, 'CALL' an ambulance, or 'EAT' it?").toUpperCase();

switch(user) {
    case "HEAL":
        var nice = prompt("Do you have a healing potion?").toUpperCase();
        var time = prompt("Do you have time?").toUpperCase();
        if (nice === "YES" && time ==="YES") {
            document.getElementById("results").innerHTML = "You heal the squirrel and it bites you and gives you rabies as a thank you present.";
        } else {
            document.getElementById("results").innerHTML = "Too bad... It turns out the squirrel was a sorcerer in disguise. The next guy came and healed it and got lots of money as a gift.";
        }
        break;
    case "KILL":
        var sword = prompt("Do you have a sword?").toUpperCase();
        var mace = prompt("Do you have a mace?").toUpperCase();
        if (sword === "YES" || mace === "YES") {
            document.getElementById("results").innerHTML = "You try to put it out of it's mysery, but you miss and injure your pinky toe. Serves you right. You should have called the ambulance.";
        } else {
            document.getElementById("results").innerHTML = "It continues to suffer. You feel bad for it, but continue walking. Now you'll never know what happened to it and the fact that you could have helped it will haunt you for the rest of your life.";
        }
        break;
    case "CALL":
        var phone = prompt("Do you have a phone?").toUpperCase();
        var flare = prompt("Do you have a flare gun for ambulances?").toUpperCase();
        if (phone === "YES" || flare === "YES") {
            document.getElementById("results").innerHTML = "You call for an ambulance. It comes and the doctors get pissed at you for calling an ambulance for a squirrel.";
        } else {
            document.getElementById("results").innerHTML = "The poor squirrel dies in your arms. It suddenly starts to rain as you scream out, 'WHYYYYYYYY' up at the sky and the shot pans out.";
        }
        break;
    case "EAT":
        var ware = prompt("Do you have a knife, fork, and plate?").toUpperCase();
        var magic = prompt("Is your blue magic guage charged enough so you can cook it?").toUpperCase();
        if (ware === "YES" && magic === "YES") {
            document.getElementById("results").innerHTML = "You cook it and try to eat it but Reitan comes and eats it before you can.";
        } else {
            document.getElementById("results").innerHTML = "Too bad. You can't eat it. Reitan comes and eats it.";
        }
        break;
    default:
        document.getElementById("results").innerHTML = "You confuse the computer because you didn't pick one of the options given to you. Congratulations.";
}

