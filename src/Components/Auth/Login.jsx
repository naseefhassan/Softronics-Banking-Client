/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Background from "../../assets/Images/bankImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";

function Login() {
  const navigate = useNavigate()
  const [errmsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/Login", formData);
      const token = response.data.token
      localStorage.setItem('jwt',token)
      navigate('/home')
      // const { role } = res.data;

      // const jwtToken = res.data.token;
      // localStorage.setItem("jwtToken", jwtToken);

      // if (role === "user") {
      //   navigate("/");
      // } else {
      //   toast.success("Welcome to Medicare");
      //   navigate("/admin/adminhome");
      // }
    } catch (error) {
      setErrMsg("Invalid email or password. Please try again.");
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
          <h1 className="font-bold text-3xl">Welcome Back </h1>
          <h1 className="text-sm">
            don't have an account?
            <span className="text-blue-600 cursor-pointer">
              <Link to={"/signup"}>Signup</Link>
            </span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mx-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleLogin}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleLogin}
              className="h-10 rounded-md opacity-55 text-black p-2 text-center"
              placeholder="password"
            />

            <p className="text-[9px] text-center text-red-600">{errmsg}</p>
            <button
              type="submit"
              className="bg-gray-500 w-20  py-[7px] rounded-md self-end font-bold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
