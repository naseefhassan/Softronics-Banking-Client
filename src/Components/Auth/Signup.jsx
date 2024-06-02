import { useState } from "react";
import Background from "../../assets/Images/bankImg.jpg";
import axiosInstance from '../../api/axios'
import { Link, useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate()
  const [errmsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrMsg('')
  };

  function validation() {
    const { password, confirmPassword } = formData;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passValidation = regex.test(password);
    if (!passValidation) {
      setErrMsg("Password must contain 8 characters with uppercase, lowercase, special character, and number");
      return false;
    } else if (password !== confirmPassword) {
      setErrMsg("Passwords do not match.")
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation(e)) {
      try {
        const response = await axiosInstance.post('/signup',formData)
        const token = response.data.token
        localStorage.setItem('jwt',token)

        navigate('/user/accountDetails')
      } catch (error) {
        if (
          error.response &&
          error.response.data.message === "User already exists with this email."
        ) {
          setErrMsg("User already exists.Please Login");
        } else {
          setErrMsg("Signup error, Please try again");
        }
      }
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="h-screen bg-gradient-to-tr bg-no-repeat bg-center from-black flex justify-center items-center"
    >
      <div className="w-96 text-white bg-gradient-to-br from-black rounded-md flex flex-col justify-around p-4">
        <div className="flex flex-col justify-around h-40">
          <h1 className="font-bold text-sm uppercase">Start Banking</h1>
          <h1 className="font-bold text-3xl">Create new account</h1>
          <h1 className="text-sm">
            already a member?{" "}
            <span className="text-blue-600 cursor-pointer">
              <Link to={'/'}>Login</Link>
            </span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mx-3">
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleSignup}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="username"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleSignup}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleSignup}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="password"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleSignup}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="confrim password"
            />
            <p className="text-[9px] text-center text-red-600">{errmsg}</p>
            <button
              type="submit"
              className="bg-gray-500 w-20  py-[7px] rounded-md self-end font-bold"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
