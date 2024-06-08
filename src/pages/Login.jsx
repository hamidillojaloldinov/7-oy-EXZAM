import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Link } from "react-router-dom";
import { LoginUser } from "../counterSlice";

const Login = () => {
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const Login = () => {
    const a = {
      email: email,
      password: password,
      image: image,
    };
    dispatch(LoginUser(a));
    if (email != "" && password != "" && image != "") {
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="car w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3x1 font-bold">Login</h4>
        <input
          label="image:"
          type="url"
          name="image"
          onChange={(e) => setimage(e.target.value)}
          required
          placeholder="https://picsum.photos/200/300"
        />
        <input
          label="email:"
          type="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
          required
          placeholder="alexei@gmail.com"
        />
        <input
          label="password:"
          type="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
          required
          placeholder="password"
        />
        <div className="mt-10">
          {email != "" && password != "" ? (
            <Link to="/">
              <button
                className="btn w-full text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
                onClick={() => Login()}
                text="submit"
              >
                submit
              </button>
            </Link>
          ) : (
            <button
              className="btn w-full text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
              onClick={() => Login()}
              text="submit"
            >
              submit
            </button>
          )}
        </div>
      </Form>
    </section>
  );
};
export default Login;
