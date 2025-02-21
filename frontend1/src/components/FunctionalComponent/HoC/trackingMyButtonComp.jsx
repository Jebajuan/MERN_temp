const trackingMyButtonComp=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracking info on clicking this Button",props.trackingInfo.CustId)
        }
        return(
            <form onClick={handleClick}>
                Email <input type="text" />
                Password: <input type="text" />
                <Component {...props}/>
            </form>
        )
    }
}
export default trackingMyButtonComp