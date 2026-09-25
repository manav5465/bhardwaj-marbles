import{useState,useEffect}from'react';import{Link,NavLink}from'react-router-dom';import{FaBars,FaTimes,FaPhoneAlt,FaWhatsapp}from'react-icons/fa';import{phone}from'../data/content';

const links=[['/','Home'],['/services','Services'],['/materials','Materials'],['/projects','Projects'],['/catalogue','Catalog'],['/about','About'],['/contact','Contact']];

export function Navbar(){
	let[o,setO]=useState(false);
	let[scrolled,setScrolled]=useState(false); // for glass style
	let[visible,setVisible]=useState(true); // navbar visible state
	useEffect(()=>{
		const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 78;
		let lastY = window.scrollY;
		let ticking = false;
			function update(){
				const currentY = window.scrollY;
				const delta = currentY - lastY;
				// apply threshold to avoid flicker
				if(Math.abs(delta) > 5){
					if(delta > 0){
						// scrolling down -> hide navbar
						setVisible(false);
					} else {
						// scrolling up -> show navbar
						setVisible(true);
					}
					setScrolled(currentY > 20);
					lastY = currentY;
				}
				ticking = false;
			}
		function onScroll(){
			if(!ticking){
				window.requestAnimationFrame(update);
				ticking = true;
			}
		}
		window.addEventListener('scroll', onScroll, {passive:true});
		// ensure initial states
		setScrolled(window.scrollY > 20);
		setVisible(true);
		return ()=>window.removeEventListener('scroll', onScroll);
	},[]);
	return (
		<header className={`nav ${scrolled? 'scrolled':''} ${visible? 'visible':'hidden'}`}>
			<div className="navin">
				<Link className="brand" to="/"><span>BM</span><b>Bhardwaj<br/>Marbles</b></Link>
				<nav className={o? 'open drawer':''}>
					{links.map(x=> <NavLink end={x[0]=='/'} to={x[0]} key={x[1]} onClick={()=>setO(false)}>{x[1]}</NavLink>)}
				</nav>
				<Link className="call desktop" to="/contact"><FaPhoneAlt/>Call Now</Link>
				<button className="menu" onClick={()=>setO(!o)} aria-label="Menu">{o?<FaTimes/>:<FaBars/>}</button>
			</div>
		</header>
	)
}

export function Footer(){return <footer><div className="container foot"><div><div className="brand"><span>BM</span><b>Bhardwaj<br/>Marbles</b></div><p>Stone surfaces and craftsmanship for spaces with a lasting point of view.</p></div><div><b>Explore</b><Link to="/materials">Materials</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div><b>Contact</b><p>Delhi NCR, India</p><a href="tel:+919876543210">{phone}</a><a href="https://wa.me/919876543210">WhatsApp</a></div></div><small>© {new Date().getFullYear()} Bhardwaj Marbles. Crafted with care.</small></footer>}

export function MobileBar(){return <div className="mobilebar"><a href="tel:+919876543210"><FaPhoneAlt/>Call</a><a href="https://wa.me/919876543210"><FaWhatsapp/>WhatsApp</a></div>}
