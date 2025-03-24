import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


function RadioSelection({ selected, setSelected }) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <input
          id="yes"
          type="radio"
          name="choice"
          className="accent-[#642AF5] scale-150 md:mt-1"
          onChange={() => setSelected("yes")}
          checked={selected === "yes"}
        />
        <label htmlFor="yes" className="ml-2">Yes</label>
      </div>
      <div className="flex items-center">
        <input
          id="no"
          type="radio"
          name="choice"
          className="accent-[#642AF5] scale-150 md:mt-1"
          onChange={() => setSelected("no")}
          checked={selected === "no"}
        />
        <label htmlFor="no" className="ml-2">No</label>
      </div>
    </div>
  );
}

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    ajency: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, ajency: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://educasebackend-y3pb.onrender.com/users/register", formData);
      console.log("Success:", response.data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data || error.message);
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
          <div className="text-4xl font-bold flex"><Link to="/"><ChevronLeft className="mt-[-0.5rem]" size={64} /></Link>Create your PopX account</div>
        </div>
        <div className="flex-col space-y-4 mt-3">
          <div className="">
            <TextField
              required fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              color="secondary"
            />
          </div>

          <div className=""><TextField
            required fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            color="secondary"
          />
          </div>
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
          <div>
            <TextField
              required fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              color="secondary"
            />
          </div>

          <p>Are you an Agency?*</p>
          <RadioSelection selected={formData.ajency} setSelected={handleRadioChange} />

          <Button
            type="submit"
            className="mt-18 md:mt-5"
            variant="signup"
            size="xl"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </div>
      </form >
    </div >
  );
}

export default RegisterPage;
