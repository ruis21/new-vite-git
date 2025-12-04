import { useState } from "react";

function UseInput(initialValue = '') {

    const [value, setValue] = useState(initialValue);
    const changeValue = (e) => {
        setValue(e.target.value)
    }
    const resetValue = () => {
        setValue(initialValue);
    }

    return { value, setValue, changeValue, resetValue }
}

export default UseInput