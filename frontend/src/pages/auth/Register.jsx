import React from 'react'
const Register = () => {
  const [role, setRole] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    linkedin: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      role, // student | alumni
      ...formData,
    };

    console.log(payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        {/* OPTION SELECTION */}
        {!role && (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Register As</h2>

            <button
              onClick={() => setRole("student")}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Student
            </button>

            <button
              onClick={() => setRole("alumni")}
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
            >
              Alumni
            </button>
          </div>
        )}

        {/* REGISTRATION FORM */}
        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center">
              Register as {role === "alumni" ? "Alumni" : "Student"}
            </h2>

            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded"
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact No."
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded"
            />

            {/* Alumni-specific field */}
            {role === "alumni" && (
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                onChange={handleChange}
                className="w-full border-2 p-2 rounded"
              />
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>

            {/* Change option */}
            <p
              onClick={() => setRole(null)}
              className="text-center text-sm text-blue-600 cursor-pointer"
            >
              ← Change registration type
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

export default Register;
