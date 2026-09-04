 export const SeriesCard = (props) => {
    console.log(props)
    return(
                <li>
                    <div>
                        <img src={props.curElem.img_url}
                         alt={props.curElem.name}
                         width="40%"
                         height="40%"
                         />
                    </div>
                    <h2>Name: {props.curElem.name}</h2>
                    <h3>Rating: {props.curElem.rating}</h3>
                    <p>Summary: {props.curElem.description}</p>
                    <p>Genre: {props.curElem.genre}</p>
                    <p>Cast: {props.curElem.cast}</p>
                    <a href={props.curElem.watch_url} target='blank'>
                        <button>Watch Now</button>
                    </a>
                </li>
            );
}