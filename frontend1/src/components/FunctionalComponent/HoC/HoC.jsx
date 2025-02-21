import Button from "./Button"
import trackingMyButtonComp from "./trackingMyButtonComp"
const HoC=()=>{
    const ButtonTrack=trackingMyButtonComp(Button)
    return(
        <div>
            <h1>Welcome to Higher order components HoC</h1>
            {/* <Button value={"Login"} /> */}
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","Password":"password"}}></ButtonTrack>
        </div>
    )
}
export default HoC