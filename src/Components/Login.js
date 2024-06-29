import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    const {register , handleSubmit , formState : {errors} } = useForm();
    const navigate = useNavigate();

    function submit (data){
        if(data.email === "othman@gmail.com" && data.password === "12345") {
            localStorage.setItem("isLoggedIn" , "true")
            navigate("/others")
        }else{
            alert("Invalid input try again")
        }

    }
    return(
        
        <div className="flex justify-center items-center">
            <Navbar />
            <div>
                <h2 className="mt-6 text-center font-extrabold text-black-500">
                    Login 
                </h2>
            </div>
            <form className="mt-6 space-y-6 text-center centering" onSubmit={handleSubmit(submit)}>
                <div>
                    <label className="redtext">
                        Email address
                    </label>
                    <input 
                        {...register("email" , {
                            required: "Email is required" ,
                            validate : (value) => {
                                if (!value.includes("@gmail")){
                                    return "Email should contain @gmail "
                                }
                            },
                        })}
                        type="text"
                        className="w-full relative placeholder-black-600 text-black-500 rounded-t-md px-3 py-2"
                        placeholder="Email address"
                    />
                    <label>
                        Email is: othman@gmail.com
                    </label>
                </div>
                <div>
                    <label className="redtext">
                        Password
                    </label>
                    <input 
                        {...register("password" , {
                            required: "Password is required" ,
                            validate : (value) => {
                                if (value.length < 5){
                                    return "Password should be 5 numbers or greater"
                                }
                            },
                        })}
                        type="password"
                        className="font-extrabold w-full relative placeholder-black-600 text-black-500 rounded-t-md px-3 py-2"
                        placeholder="Password"
                    />
                    <label>
                        Password is: 12345
                    </label>
                </div>
                <div>
                    <button 
                        type="submit"
                        className="bluetext w-full relative placeholder-black-600 rounded-t-md px-3 py-2"
                    >
                        Login
                    </button>
                </div>
                <p className="redtext">
                    {errors.email ? `${errors.email.message}` : " "}
                </p>
                <p className="redtext">
                    {errors.password ? `${errors.password.message}` : " "}
                </p>
            </form>
        </div>
    )
        
    
};

export default Login ;