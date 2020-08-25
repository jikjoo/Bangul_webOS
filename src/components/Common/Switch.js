import React from 'react';
import SwitchBase from '@jikjoo/moonstone/Switch';


const Switch = ({ selected }) => {
    return (
        <SwitchBase className="switch" selected={selected} >
            ●
        </SwitchBase>
    )

}
export default Switch;