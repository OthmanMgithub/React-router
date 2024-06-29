import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
    return 
        <div className="flex justify-center items-center">
            <div>
                <h2 className="mt-6 text-center font-extrabold text-black-500">
                    Login 
                </h2>
            </div>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit(submit)}>
                <div>
                    <label>
                        Email address
                    </label>
                    <input 
                        {...register("email" , {
                            required: "Email is required" ,
                            validate : (value) => {
                                if (!value.Includes("@gmail")){
                                    return "Email should contain @gmail "
                                }
                            },
                        })}
                        type="text"
                        className="w-full relative placeholder-black-600 text-black-500 rounded-t-md px-3 py-2"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label>
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
                        className="w-full relative placeholder-black-600 text-black-500 rounded-t-md px-3 py-2"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        className="w-full relative placeholder-black-600 text-black-500 rounded-t-md px-3 py-2"
                    >
                        Login
                    </button>
                </div>
                <p className="text-red-700">
                    {errors.email ? `${errors.email.message}` : " "}
                </p>
                <p className="text-red-700">
                    {errors.password ? `${errors.password.message}` : " "}
                </p>
            </form>
        </div>
    
};

export default Login ;