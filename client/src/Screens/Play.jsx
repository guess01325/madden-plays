import axios from "axios";
import { baseURL, config } from "../services";
import "../Assets/Play.css";


function Play(props) {
  
        const handleDelete = async () => {
          await axios.delete(`${baseURL}${props.play.id}`, config);
          props.setToggleFetch((prevState) => !prevState);
        };
       
   

  return (
    <div className="play-container" key={props.play.id}>
      <div className="teamImage-container">
        <div id="play-image">
          <img className="teamImage" src={props.play.fields.URL} alt = 'play'></img>
        </div>
        <div id="play-button">
          <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="play-details">
        <div id="play-team">
          <h4>{props.play.fields.team}</h4>
        </div>
        <div id="play-play">
          <h4>{props.play.fields.play}</h4>
        </div>
        <div id="play-formation">
          <h4>{props.play.fields.formation}</h4>
        </div>
        <div id="play-type">
          <h4>{props.play.fields.type}</h4>
        </div>
      </div>
    </div>
  );
}
export default Play;
