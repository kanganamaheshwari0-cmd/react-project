  const SeriesCard = ({data}) => {
    // console.log(props)
    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "0.8rem 1.6rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:`${rating>= 8.5 ? "#7dcea0":"#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
    }

    const ratingClass = rating >= 8.5 ? "super_hit": "average";
    return(
                <li className="card">
                    <div>
                        <img src={img_url} alt={name} className="w-full h-104 object-cover" />
                    </div>

                    <div className="card-content">
                    <h2>Name: {name}</h2>
                    <h3>Rating:
                        <span className={`rating ${ratingClass}`}>
                             {rating}
                              </span> 
                    </h3>
                    <p>Summary: {description}</p>
                    <p>Genre: {genre.join(", ")}</p>
                    <p>Cast: {cast.join(", ")}</p>
                    <a href={watch_url} target='blank'>
                        <button style={btn_style}>Watch Now</button>
                    </a>
                    </div>
                </li>
            );
}

export default SeriesCard;