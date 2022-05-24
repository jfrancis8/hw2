import React from "react";

export default function Register({dispatch}) {
    const[formData, setFormData] = useState({
        user:"",
        pass:"",
        passAgain:""
    })
  
    return (
    <form onSubmit={(e) => {e.preventDefault(); dispatch({type:'Register',user:formData.user})}}>
      <label htmlFor="register-username">User:</label>
      <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}
        name="register-username" placeholder="Username" id="register-username" />
      <label htmlFor="register-password">Pass:</label>
      <input type="password" name="register-password" id="register-password" />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat : e.target.value})}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input type="submit" value="Register" disabled={formData.user.length ===0|| formData.pass.length===0||formData.pass!=formData.passAgain} />
    </form>
  )
}