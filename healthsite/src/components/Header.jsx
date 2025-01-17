const Header = ({setState}) => {
    return (
<header>
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li onClick={() => {
              console.log("clicked");
              setState("Home");
            }}>
              <a href="#" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
                Home
              </a>
            </li>
            <li onClick={() => {console.log("dashboard")}}>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
                Createpost
              </a>
            </li>
            <li onClick={() => {console.log("orders")}}>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                Orders
              </a>
            </li>
            <li onClick={() => {console.log("products")}}>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"></use></svg>
                Products
              </a>
            </li>
            <li onClick={() => {console.log("customer")}}>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"></use></svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button"
           className="btn btn-light text-dark me-2" 
           onClick={() => {
            console.log("clicked");
            setState("Login");
            console.log("iiii");
          }}
          >Login</button>
          <button type="button" className="btn btn-primary" onClick={() => {
            console.log("kkkk");
            setState("Signup")
          }}>Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    );
};
export default Header;