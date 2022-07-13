import Notecontext from "./Notecontext";
const Notestate=(props)=>{
    const state = {
        "name":"vaibhav",
        "class" : "B"
    }
return(
    <Notecontext.Provider value={state}>
        {props.children}
    </Notecontext.Provider>
);
}
export default Notestate;