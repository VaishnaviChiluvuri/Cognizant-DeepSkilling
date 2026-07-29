function OddPlayers(players){

    return (

        <ul>

            <li>First : {players[0]}</li>
            <li>Third : {players[2]}</li>
            <li>Fifth : {players[4]}</li>

        </ul>

    );

}

function EvenPlayers(players){

    return (

        <ul>

            <li>Second : {players[1]}</li>
            <li>Fourth : {players[3]}</li>
            <li>Sixth : {players[5]}</li>

        </ul>

    );

}

export {OddPlayers,EvenPlayers};