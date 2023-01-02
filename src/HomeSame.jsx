const HomeSame=(props)=>{
return(
    <>
        <div className="container">
        <div className="row">


        <div className="col-md-6">    
                <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia explicabo a mollitia quos recusandae quidem esse voluptatem fuga et, laboriosam voluptates tempora, ut atque sit rerum quasi distinctio obcaecati.</p>
        <br />
        <button className="btn btn-warning">Get Start</button>
            </div>
        <div className="col-md-6">
            <img src={props.imgname} alt="" className="img-fluid"/>
        </div>


        </div>

        </div>
    </>
)
}
export default HomeSame;