const Login = () => {
    return (
        <form className="login">
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your email"/>
     
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
    <input type="password" className="htmlForm-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 htmlForm-check">
    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1"/>
    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
};
 

export default Login;
