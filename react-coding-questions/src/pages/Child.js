function Child(props){

    const changeText = (e)=>{
        props.setBackground(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={(e)=>changeText(e)}/>
        </div>
    )
}

export default Child