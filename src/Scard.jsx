const Scard = (props) => {
  return (
    <>
      <div className="card" style={{width:'18rem'}}>
        <img src={props.imgsrc} className="card-img-top img-fluid" alt="random images" />
        <div className="card-body">
          <h5 className="card-title">{props.ctitle}</h5>
          <p className="card-text">
                    {props.ctext}
          </p>
          <a href={props.link} className="btn btn-Danger">
            Go Youtube
          </a>
        </div>
      </div>
    </>
  );
};
export default Scard;
