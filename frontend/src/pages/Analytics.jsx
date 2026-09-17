function Analytics(){
  const data = [
    { step: "Visited Home", users: 1000 },
    { step: "Searched", users: 750 },
    { step: "Viewed Product", users: 500 },
    { step: "Added to Cart", users: 320 },
    { step: "Checkout", users: 150 },
  ]
  return(
    <div style={{padding:"20px", maxWidth:"800px", margin:"auto"}}>
      <h1>📊 Customer Journey Funnel</h1>
      {data.map((d,i)=>(
        <div key={i} style={{margin:"15px 0"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}><b>{d.step}</b><span>{d.users}</span></div>
          <div style={{background:"#eee", height:"25px", borderRadius:"10px"}}>
            <div style={{width:`${d.users/10}%`, background:"#007bff", height:"25px", borderRadius:"10px"}}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Analytics