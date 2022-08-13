import React from 'react'

function Alert(props) {
    // const capitalize = (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert ${props.alert.type} alert-dismissible fade show bg-white text-xl font-bold flex justify-center`} role="alert">
           {/* <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}  */}
           <strong></strong>{props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert