import ListofPlayers from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";
import {OddPlayers,EvenPlayers} from "./Components/IndianPlayers";
import ListofIndianPlayers from "./Components/ListofIndianPlayers";

function App() {

    var flag = true;

    const players = [

        {name:"Jack",score:50},
        {name:"Michael",score:70},
        {name:"John",score:40},
        {name:"Ann",score:61},
        {name:"Elizabeth",score:61},
        {name:"Sachin",score:95},
        {name:"Dhoni",score:100},
        {name:"Virat",score:84},
        {name:"Jadeja",score:64},
        {name:"Raina",score:75},
        {name:"Rohit",score:80}

    ];

    const IndianTeam=[
        "Sachin1",
        "Dhoni2",
        "Virat3",
        "Rohit4",
        "Yuvaraj5",
        "Raina6"
    ];

    const T20players=[
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiTrophy=[
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const IndianPlayers=[...T20players,...RanjiTrophy];

    if(flag===true){

        return(

            <div>

                <h1>List of Players</h1>

                <ListofPlayers players={players}/>

                <hr/>

                <h1>List of Players having Scores Less than 70</h1>

                <Scorebelow70 players={players}/>

            </div>

        );

    }

    else{

        return(

            <div>

                <h1>Odd Players</h1>

                {OddPlayers(IndianTeam)}

                <hr/>

                <h1>Even Players</h1>

                {EvenPlayers(IndianTeam)}

                <hr/>

                <h1>List of Indian Players Merged</h1>

                <ListofIndianPlayers IndianPlayers={IndianPlayers}/>

            </div>

        );

    }

}

export default App;