import Count  from "./count-component";
import React from 'react';

function PassingStateProps(){
    const [value, setValue] = React.useState(0);
    function subValue(value){
        value  = value - 1;
        return value;
    }
    function addValue(){
        setValue( (prevValue) => {
            let newValue = prevValue + 1;
            return newValue;
        } )
    }
    return (
            <div>
                <div onClick={subValue}> - </div>
                <div>
                    <Count number = {value} />
                </div>
                <div onClick={addValue}> + </div>
            </div>
    )
}
export default PassingStateProps;