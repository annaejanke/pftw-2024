import "./camelid.css";

function Camelid ({src, trivia}) {
    return (
        <div className="colorCard">
            <img src={src}/>
            <p>{trivia}</p>
        </div>
    );

}
export default Camelid;