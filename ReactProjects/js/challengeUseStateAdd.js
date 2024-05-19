function App(){
    const [value, setValue] = React.useState(0)
    function updateAdd(arg){
        arg = arg + 1;
        return arg;
    }
    function updateSub(arg){
        arg = arg - 1;
        return arg;
    }
    function handleAdd(){
        // setValue(updateAdd(value));
        // setValue(value + 1)
        setValue(value => value + 1)
    }
    function handleSubract(){
        setValue(value -1)
        // setValue(updateSub(value))
        // setValue(value => value - 1);
    }


    return (
        <div>
            <button onClick={handleSubract}> - </button>
            <div className="initialValue">{value}</div>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));