import{useState}from'react';import{Hero}from'../components/UI';import{phone}from'../data/content';import{FaClock,FaLocationArrow,FaPhoneAlt,FaWhatsapp,FaMapMarkedAlt}from'react-icons/fa';

export default function Contact(){
	const [loaded,setLoaded]=useState(false);
	// Use the provided short URL for directions; iframe uses an embed friendly query
	const mapsShort='https://maps.app.goo.gl/7t749ZqPQeSxNAVp6';
	const embedSrc='https://www.google.com/maps?q=Bhardwaj+Marbles+Delhi+NCR&output=embed';

	return <>
		<Hero tag="Contact" title="Let’s make something enduring." copy="For a material consultation, a project discussion or an on-site visit, we would be pleased to hear from you."/>
		<section className="section container contact">
			<div>
				<i>Our studio</i>
				<h2>Begin with a conversation.</h2>
				<a className="bigphone" href="tel:+919811823950"><FaPhoneAlt/>{phone}</a>
				<a className="wa" href="https://wa.me/919811823950"><FaWhatsapp/>Start a WhatsApp conversation</a>
				<p><FaLocationArrow/> <b>Visit us</b><br/>Delhi NCR, India<br/>By appointment and walk-in.</p>
				<p><FaClock/> <b>Studio hours</b><br/>Monday–Saturday: 9:30 AM–7:00 PM<br/>Sunday: By appointment</p>
			</div>

			<div className="map">
				{!loaded && <div className="mapSkeleton" aria-hidden="true"><div className="pulse"/></div>}
				<iframe
					title="Bhardwaj Marbles location"
					src={embedSrc}
					loading="lazy"
					onLoad={()=>setLoaded(true)}
					frameBorder="0"
					allowFullScreen
				/>

				<a className="mapDirections" href={mapsShort} target="_blank" rel="noreferrer">
					<FaMapMarkedAlt/> Get Directions
				</a>
			</div>
		</section>

		<section className="callout"><div className="container">Have a project in mind? <a href="tel:+919811823950">Call now</a></div></section>
	</>
}
