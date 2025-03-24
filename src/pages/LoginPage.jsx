import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/users/login", formData);
            console.log("Login Success:", response.data);
            toast.success("Login successful");
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            navigate("/user");
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            toast.error("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#F7F8F9]">
            <form
                onSubmit={handleSubmit}
                className="md:w-[30vw] px-[2%] md:border rounded-2xl py-8"
            >
                <div className="flex flex-col space-y-3 text-center">
                    <div className="text-4xl font-bold flex "><Link to="/"><ChevronLeft className="mt-[-0.5rem]" size={64} /></Link>Sign in to your PopX account</div>
                    <p className="opacity-75 mx-auto w-[75%] md:w-full md:mx-0">
                        Enter your credentials to access your account.
                    </p>
                </div>
                <img className="w-[70%] mx-auto my-10" src="/login.svg" alt="Login" />
                <div className="flex-col space-y-4 mt-3">
                    <div>
                        <TextField
                            required fullWidth
                            label="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            color="secondary"
                        />
                    </div>
                    <div>
                        <TextField
                            required fullWidth
                            type="password"
                            label="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            color="secondary"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="grey"
                        size="xl"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;