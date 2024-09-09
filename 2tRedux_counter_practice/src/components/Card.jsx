const Card = ({children}) => {
    return (
        <div class="card" style={{inlineSize: "60%"}}>
  
  <div class="card-body">{children}</div>
</div>
    )
};

export default Card;