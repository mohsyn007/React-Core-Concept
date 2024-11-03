
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
//   const handleSignUpSubmit=data=>{
//   console.log('sign up data',data);
// }
// const handleUpdateProfile=data=>{
//   console.log('Update profile',data);
// }
  return (
    <>
     
      <h1>Form Master</h1>
      <Grandpa></Grandpa>




      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReuseableForm>
       */}
      
      {/* <ReuseableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile Updated</p>
        </div>
      </ReuseableForm> */}
      
      
      
      
      
    </>
  )
}

export default App
