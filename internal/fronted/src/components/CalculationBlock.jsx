import React, { useState } from "react";

function CalculationBlock(props) {
    console.log(props);
    const [eqCount, setEqCount] = useState(0);

    const AddEq = () => {
        setEqCount(eqCount+1);
    };

    return (
        <div className="equipment-block">
            <button className="equipment-button" onClick={AddEq}>
                <span> Добавить</span>
                <i>{eqCount}</i>
                </button>
        </div>
    )
}

export default CalculationBlock; 