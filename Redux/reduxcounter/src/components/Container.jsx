const Container = ({children}) => {
    return(
    <div class="card" style={{inlineSize: "50%"}}>
       
        <div class="card-body">{children}</div>
      </div>
      );
};

export default Container;
