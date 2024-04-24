
export const checkValidate = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
    const isPasswordValid = /^((?=\S*?[a-z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/.test(password);
  
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
   
    return null;
};