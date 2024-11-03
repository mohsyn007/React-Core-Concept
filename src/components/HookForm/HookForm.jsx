import useInputState from "../../hooks/useInputState";


const HookForm = () => {
// const [name,handleChangeName]=useInputState('Napa');
// const nameState=useInputState('Napa');
const emailState=useInputState('Napa@gmail.com');


    const handleSubmit=e=>{
        console.log('form data',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChangeName} type="text" name="name" />
                <br /> */}
               <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
               <input type="submit" value="Submit" />
               
            </form>
        </div>
    );
};

export default HookForm;