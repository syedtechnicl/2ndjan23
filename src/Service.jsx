import Sdata from "./Sdata"
import Scard from "./Scard"
const Service=()=>{
    return(
        <>
        {
            Sdata.map((val,index)=>{
                return(
                    <Scard 
                        key={index}
                        imgsrc={val.imgsrc}
                        ctitle={val.ctitle}
                        ctext={val.ctext}
                        link={val.link}

                    />
                )

            })
        }

        </>
    )
    }
    export default Service