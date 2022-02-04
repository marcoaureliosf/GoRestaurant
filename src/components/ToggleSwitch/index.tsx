import { useState } from "react";

import { Container } from "./styles";

interface ToggleSwitchProps {
    availability: boolean;
}

export function ToggleSwitch({availability}:ToggleSwitchProps) {
    
    const [isChecked, setIsChecked] = useState(availability);

    function handleCheck() {
        setIsChecked(!isChecked)
    }

    return (
        <Container checked={isChecked}>
            <input type="checkbox" onClick={handleCheck} />
            <span />
        </Container>
    )
}