import React from "react";

function Input(props){
    return(
        <div>
            <table style={{width:`50%`}}>
                <tr>
                    <td>
                    <label for={props.for} className={props.labelClass}>{props.label}</label>
                    </td>
                    <td>
                    <input 
                            type={props.type} 
                            className={props.className} 
                            placeholder={props.placeholder}
                            onChange={props.onChange} 
                            value={props.value} 
                            id={props.id} 
                            name={props.name} />
                    </td>
                </tr>
   
    </table>
    </div>
    );
   
};

export default Input;