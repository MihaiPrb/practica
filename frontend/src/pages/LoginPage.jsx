import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState} from "react";
import Input from "../components/Input";

const BASE_URL = "http://localhost:80/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/userLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseText = await response.text();
      if (response.status === 200) {
        console.log("success");
        alert("Login reusit... navigare pe pagina HOME");
        navigate("/home");
      } else {
        setError(responseText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="flex w-full justify-center py-20">
      <form className="flex flex-col items-center justify-around border w-2/4 h-96 px-2">
        <h1 className="text-2xl font-bold">Log in</h1>
        <Input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600 w-2/4"
          placeholder="Email"
          name="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <Input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600 w-2/4"
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        {/* <Input name ="salut" type="text" placeholder={"Adauga"}/> */}
        <Button text="Login" onClick={handleSubmit} />
        <div className="flex text-lg">
          <p>Nu ai cont?</p>
          <Link className="ml-2 underline text-indigo-500 text-indigo-600" to="/register">
            Înregistrează-te
          </Link>
        </div>
        {error ? <div className="text-red-600">{error}</div> : null}
      </form>
    </div>
  );
};

export default LoginPage;
