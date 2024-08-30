function BoxComponent(props)
{
    const style = 
    {
        backgroundColor: props.on ? "#222222" : "none"
    };
    return (
        <div style={style}  className="box">
        </div>
    )
}
export default BoxComponent;