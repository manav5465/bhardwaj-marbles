import{useState,useEffect}from'react';import{Link,NavLink}from'react-router-dom';import{FaBars,FaTimes,FaPhoneAlt,FaWhatsapp}from'react-icons/fa';import{phone}from'../data/content';import brandLogo from'../assets/logos/bhardwaj-marble-trading-co.svg';

const links=[['/','Home'],['/services','Services'],['/materials','Materials'],['/projects','Projects'],['/catalogue','Catalog'],['/about','About'],['/contact','Contact']];

export function Navbar(){
	let[o,setO]=useState(false);
	let[scrolled,setScrolled]=useState(false); // for glass style
	let[visible,setVisible]=useState(true); // navbar visible state
	useEffect(()=>{
		if(!o)return;
		const previousOverflow=document.body.style.overflow;
		document.body.style.overflow='hidden';
		function closeOnEscape(event){if(event.key==='Escape')setO(false)}
		window.addEventListener('keydown',closeOnEscape);
		return ()=>{
			document.body.style.overflow=previousOverflow;
			window.removeEventListener('keydown',closeOnEscape);
		};
	},[o]);
	useEffect(()=>{
		const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 78;
		let lastY = window.scrollY;
		let ticking = false;
			function update(){
				const currentY = window.scrollY;
				const delta = currentY - lastY;
				// apply threshold to avoid flicker
				if(o){
					setVisible(true);
				}else if(Math.abs(delta) > 5){
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
	},[o]);
	return (
		<header className={`nav ${scrolled? 'scrolled':''} ${visible? 'visible':'hidden'} ${o?'menu-open':''}`}>
			<div className="navin">
				<Link className="brand" to="/" aria-label="Bhardwaj Marble Trading Co. home"><img className="brand-logo" src={brandLogo} alt="Bhardwaj Marble Trading Co."/></Link>
				<nav id="mobile-navigation" aria-label="Main navigation" aria-hidden={o?false:undefined} className={`mobileNav${o?' open':''}`}>
					{links.map(x=> <NavLink end={x[0]=='/'} to={x[0]} key={x[1]} onClick={()=>setO(false)}>{x[1]}</NavLink>)}
					<Link className="mobile-call" to="/contact" onClick={()=>setO(false)}><FaPhoneAlt/>Call Now</Link>
				</nav>
				<Link className="call desktop" to="/contact"><FaPhoneAlt/>Call Now</Link>
				<button className="menu" onClick={()=>setO(!o)} aria-label={o?'Close menu':'Open menu'} aria-expanded={o} aria-controls="mobile-navigation">{o?<FaTimes/>:<FaBars/>}</button>
			</div>
		</header>
	)
}

export function Footer(){return <footer><div className="container foot"><div><div className="brand"><img className="brand-logo" src={brandLogo} alt="Bhardwaj Marble Trading Co."/></div><p>Stone surfaces and craftsmanship for spaces with a lasting point of view.</p></div><div><b>Explore</b><Link to="/materials">Materials</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div><b>Contact</b><p>Delhi NCR, India</p><a href="tel:+919811823950">{phone}</a><a href="https://wa.me/919811823950">WhatsApp</a></div></div><small>© {new Date().getFullYear()} Bhardwaj Marble Trading Co. Crafted with care.</small></footer>}

export function MobileBar(){return <div className="mobilebar"><a href="tel:+919811823950"><FaPhoneAlt/>Call</a><a href="https://wa.me/919811823950"><FaWhatsapp/>WhatsApp</a></div>}
