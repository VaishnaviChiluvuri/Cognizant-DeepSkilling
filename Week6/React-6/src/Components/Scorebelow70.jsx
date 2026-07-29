function Scorebelow70(props) {

    const players = props.players.filter(player => player.score <= 70);

    return (

        <ul>

            {
                players.map((player,index)=>(
                    <li key={index}>
                        Mr. {player.name} {player.score}
                    </li>
                ))
            }

        </ul>

    );

}

export default Scorebelow70;