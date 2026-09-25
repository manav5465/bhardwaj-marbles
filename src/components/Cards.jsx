import{useState}from'react';import{Link}from'react-router-dom';import{FaArrowRight}from'react-icons/fa';
export function Material({x,i,onDiscover}){
	return (
		<article className="material material-card">
			<div className="material-bg" style={{backgroundImage:`url(${x.img})`}} />
			<div className="material-overlay" />
			<div className="material-content">
				<i>0{i+1}</i>
				<h3>{x.name}</h3>
				<p>{x.preview}</p>
				<button className="discover" onClick={()=>onDiscover(x)}>Discover <FaArrowRight/></button>
			</div>
		</article>
	)
}

export function Service({x,onKnowMore}){
	return (
		<article className="service service-card">
			<div className="service-bg" style={{backgroundImage:`url(${x.img})`}} />
			<div className="service-overlay" />
			<div className="service-content">
				<h3>{x.name}</h3>
				<p>{x.preview}</p>
				<button className="knowmore" onClick={()=>onKnowMore(x)}>Know more <FaArrowRight/></button>
			</div>
		</article>
	)
}

export function Project({x,i}){return <article className={'project p'+i}><div><p>{x[1]}</p><h3>{x[0]}</h3><Link to="/projects">View project <FaArrowRight/></Link></div></article>}
