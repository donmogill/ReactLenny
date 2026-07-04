

const Itinerary = () => {
  
  return (
<>
<div className="wrap">
    <div className="section-head reveal">
      <div className="section-tag">Where we're playing</div>
      <h2>The itinerary</h2>
    </div>
    <div className="itinerary reveal">
      <div className="stop">
        <span className="stop-num mono">01</span>
        <span className="stop-date mono">Jul 11</span>
        <div className="stop-info">
          <span className="venue">The Hive</span>
          <span className="note">Simi Valley</span>
        </div>
        <span className="stop-tag">Tickets</span>
      </div>
      <div className="stop">
        <span className="stop-num mono">02</span>
        <span className="stop-date mono">Jul 26</span>
        <div className="stop-info">
          <span className="venue">Santa Monica Pier</span>
          <span className="note">Santa Monica</span>
        </div>
        <span className="stop-tag">Tickets</span>
      </div>
      <div className="stop">
        <span className="stop-num mono">03</span>
        <span className="stop-date mono">Aug 09</span>
        <div className="stop-info">
          <span className="venue">Mrs Olsen's</span>
          <span className="note">Ventura</span>
        </div>
        <span className="stop-tag">Tickets</span>
      </div>
      <div className="stop">
        <span className="stop-num mono">04</span>
        <span className="stop-date mono">Aug 23</span>
        <div className="stop-info">
          <span className="venue">Private event — booked</span>
          <span className="note">Malibu</span>
        </div>
        <span className="stop-tag">Sold out</span>
      </div>
    </div>
  </div>

</>  


  )
}

export default Itinerary