import React from 'react';
export default function CNC({onExplore}){
  return (
    <section className="section cnc">
      <div className="container">
        <h2>Precision CNC Stone Craftsmanship</h2>
        <p className="sub">Advanced CNC machining for marble, granite, Corian, quartz, and engineered stone applications.</p>
        <ul className="features">
          <li>High precision cutting</li>
          <li>Intricate custom patterns</li>
          <li>Architectural detailing</li>
          <li>Religious and decorative carvings</li>
          <li>Corporate branding and signage</li>
          <li>Premium finishing standards</li>
        </ul>
        <button className="btn" onClick={onExplore}>Explore CNC Capabilities</button>
      </div>
    </section>
  )
}
