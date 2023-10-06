import style from "./Banner.module.css"


function Banner(){
    return (
        <div className={"row " + style.banner}>
            <div className="col-md-12" style={{padding: 0}}>
                <img src="/H2x1_NSwitchDS_HollowKnightSilksong_image1280w.jpg" />
            </div>
        </div>
    )
}


export default Banner