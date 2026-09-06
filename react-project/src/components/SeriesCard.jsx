import styles from "./Netflix.module.css";
import styled from 'styled-components';

const SeriesCard = ({data}) => {
    // console.log(props)
    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    // const btn_style = {
    //     const ButtonThapa = styled.button({
    //     padding: "0.8rem 1.6rem",
    //     border:"none",
    //     fontSize:"1.6rem",
    //     backgroundColor:`${rating>= 8.5 ? "#7dcea0":"#f7dc6f"}`,
    //     color:"var(--btn-color)",
    //     fontWeight: "bold",
    //     cursor: "pointer",

    //   });
       const ButtonThapa = styled.button`
        padding: 0.8rem 1.6rem;
        border:none;
        font=size:1.6rem;
        background-color:${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
        color:var(--btn-color);
        font-weight: bold;
        cursor: pointer;

       `;

       const Rating = styled.h3`
       font-size:1.6rem;
       color:#7dcea0;
       text-transform:capitalize;
       
       `;




    //     padding: "0.8rem 1.6rem",
    //     border:"none",
    //     fontSize:"1.6rem",
    //     backgroundColor:`${rating>= 8.5 ? "#7dcea0":"#f7dc6f"}`,
    //     color:"var(--btn-color)",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    // }

    const ratingClass = rating >= 8.5 ? styles.super_hit: styles.average;
    return(
                <li className={styles.card}>
                    <div>
                        <img src={img_url} alt={name} className="w-full h-104 object-cover" />
                    </div>

                    <div className={styles["card-content"]}>
                    <h2>Name: {name}</h2>
                    <Rating>
                    Rating:
                        <span className={`${styles.rating} ${ratingClass}`}> {rating}</span> 
                    </Rating>
                  
                    <p>Summary: {description}</p>
                    <p>Genre: {genre.join(", ")}</p>
                    <p>Cast: {cast.join(", ")}</p>
                    <a href={watch_url} target='blank'>
                        {/* <button style={btn_style}>Watch Now</button> */}
                        <ButtonThapa rating={rating}>Watch Now</ButtonThapa>
                    </a>
                    </div>
                </li>
            );
}

export default SeriesCard;