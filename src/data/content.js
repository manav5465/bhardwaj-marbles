import{FaGem,FaDraftingCompass,FaLayerGroup,FaRulerCombined,FaSlidersH,FaCubes}from'react-icons/fa';
export const phone='+91 9811823950';

// Materials ordered exactly as requested with detailed popup content and image keys (place images in src/assets/materials/)
export const materials=[
	{
		id:'granite',
		name:'Granite',
		preview:'Enduring strength for everyday grandeur.',
		img:'/src/assets/materials/granite.png',
		description:'Granite is a dense, hard natural stone known for its granular appearance and outstanding durability. It resists heat, scratches and stains when sealed correctly, making it ideal for high-traffic surfaces and heavy-use areas.',
		applications:['Kitchen countertops','Exterior cladding','Flooring'],
		advantages:['High durability','Premium appearance','Easy maintenance','Long lifespan','Suitable for residential and commercial projects']
	},
	{
		id:'marble',
		name:'Marble',
		preview:'Natural movement, endlessly individual.',
		img:'/src/assets/materials/marble.png',
		description:'Marble is prized for its veining, depth and classic elegance. Softer than granite, it offers timeless beauty for interiors and feature installations, with patina developing over time.',
		applications:['Vanity tops','Feature walls','Sculptural elements'],
		advantages:['Premium appearance','Unique veining','Polishable finish','Suitable for luxury residential and hospitality projects']
	},
	{
		id:'sandstone',
		name:'Sandstone',
		preview:'Honest texture with enduring character.',
		img:'/src/assets/materials/sandstone.png',
		description:'Sandstone is a sedimentary stone with warm, textured surfaces. It performs well in exterior and landscape applications and brings organic warmth to interiors.',
		applications:['Paving & landscaping','Facade cladding','Feature flooring'],
		advantages:['Natural texture','Weather resistant','Earthy tones','Good for outdoor use']
	},
	{
		id:'engineered',
		name:'Engineered Stone',
		preview:'Consistent, high-performance surfacing.',
		img:'/src/assets/materials/engineered.png',
		description:'Engineered stone (quartz-based) combines natural quartz and resins to deliver consistent colour, strength and low porosity — ideal where uniformity and hygiene are priorities.',
		applications:['Laboratory surfaces','Kitchen countertops','Retail fittings'],
		advantages:['Low porosity','Uniform look','High strength','Low maintenance']
	},
	{
		id:'quartz',
		name:'Quartz',
		preview:'Durable, design-friendly surfacing.',
		img:'/src/assets/materials/quartz.png',
		description:'Quartz surfaces are non-porous and extremely durable, offering a broad palette of colours and engineered finishes for both residential and commercial projects.',
		applications:['Countertops','Wall cladding','Reception desks'],
		advantages:['Low maintenance','Wide colour range','Stain resistant','Reliable performance']
	},
	{
		id:'onyx',
		name:'Onyx',
		preview:'Translucent stone that transforms light.',
		img:'/src/assets/materials/onyx.png',
		description:'Onyx is a translucent, banded stone used for dramatic backlit features. Its delicate nature requires careful handling but delivers spectacular luminous effects.',
		applications:['Backlit wall panels','Feature counters','Art installations'],
		advantages:['Striking translucency','Unique patterns','Dramatic aesthetics','Best for feature applications']
	},
	{
		id:'corian',
		name:'Corian',
		preview:'Seamless, sculpted contemporary surfaces.',
		img:'/src/assets/materials/corian.png',
		description:'Corian is a solid-surface material that allows seamless joins and thermoforming for custom shapes. It is hygienic and repairable, popular in hospitality and healthcare settings.',
		applications:['Seamless countertops','Curved reception desks','Sanitary surfaces'],
		advantages:['Seamless joins','Repairable','Non-porous','Good for sculpted forms']
	},
	{
		id:'composite',
		name:'Composite Marble',
		preview:'Bespoke engineered marble alternatives.',
		img:'/src/assets/materials/composite.png',
		description:'Composite marble blends stone and resins to achieve consistent colours and patterns while offering enhanced workability and reduced weight compared to natural stone.',
		applications:['Table tops','Panel cladding','Custom joinery'],
		advantages:['Lightweight options','Consistent appearance','Customisable finishes','Cost-effective alternatives']
	}
];

// Services ordered as requested. Each service contains content for side-panel popups.
export const services=[
	{
		id:'cnc',
		name:'CNC',
		preview:'Advanced precision CNC machining and stone carving.',
		img:'/src/assets/services/cnc.png',
		description:'Precision CNC machining combines digital design with high-tolerance routing to produce intricate patterns, signage, architectural elements and bespoke decorative work in stone.',
		process:'We program CAD files and use multi-axis CNC routers to execute precise cuts, followed by manual finishing for premium polish and assembly.',
		applications:['Architectural facades','Intricate panels','Custom signage','Religious carvings'],
		benefits:['High precision','Repeatable accuracy','Complex geometries possible','Fast prototyping']
	},
	{
		id:'waterjet',
		name:'Water Jet Cutting',
		preview:'Versatile, cold-cutting for delicate inlay and shapes.',
		img:'/src/assets/services/waterjet.png',
		description:'Water jet cutting uses a high-pressure stream of water (with abrasive) to cut stone without heat, ideal for intricate inlays and composite materials.',
		process:'Vector files are translated to cutting paths and executed on CNC waterjet tables; pieces are finished and assembled manually.',
		applications:['Marble inlay','Complex motifs','Thin sections'],
		benefits:['Heat-free cutting','Fine detail','Material versatility']
	},
	{
		id:'mandir',
		name:'Mandir',
		preview:'Hand-finished religious carvings and temple elements.',
		img:'/src/assets/services/mandir.png',
		description:'Traditional and contemporary mandir designs executed in stone with a combination of CNC roughing and artisan carving for spiritual spaces.',
		process:'Design consultation, 3D modelling, CNC roughing and skilled hand finishing for sacred proportions.',
		applications:['Home mandirs','Temple restorations','Community shrines'],
		benefits:['Cultural accuracy','Hand-finished detail','Durable construction']
	},
	{
		id:'tabletop',
		name:'Table Top',
		preview:'Bespoke table tops crafted to specification.',
		img:'/src/assets/services/tabletop.png',
		description:'Custom table tops in natural and engineered stone with edge detailing and integrated support meant for both residential and hospitality settings.',
		process:'Surface selection, cut-to-size, edge profiling and sealing with installation support.',
		applications:['Dining tables','Conference tables','Cafe fittings'],
		benefits:['Custom sizing','Edge profiles','Durable finishes']
	},
	{
		id:'nameplate',
		name:'Nameplate',
		preview:'Precision signage and branding solutions in stone.',
		img:'/src/assets/services/nameplate.png',
		description:'Stone nameplates and signage offer a premium, long-lasting branding solution for residences and commercial buildings.',
		process:'Design proofing, CNC or hand engraving, finishing and secure mounting.',
		applications:['Building signage','Corporate plaques','Residential nameboards'],
		benefits:['Brand durability','Premium finish','Customisable']
	},
	{
		id:'inlay',
		name:'Marble Inlay',
		preview:'Artful inlay compositions with meticulous handwork.',
		img:'/src/assets/services/inlay.png',
		description:'Marble inlay combines multiple stone varieties to form decorative patterns and pictorial motifs for floors, tabletops and feature installations.',
		process:'Precision cutting, careful assembly and hand finishing to achieve seamless compositions.',
		applications:['Floor medallions','Table tops','Feature panels'],
		benefits:['Artisanal detail','Unique patterns','Timeless aesthetics']
	},
	{
		id:'designer-wall',
		name:'Designer Wall Panel',
		preview:'Tailored feature walls with material-led character.',
		img:'/src/assets/services/wallpanel.png',
		description:'Feature walls crafted from stone, engineered stone or composite panels to create immersive interiors.',
		process:'Concept, prototyping, CNC/hand finishing and installation coordination.',
		applications:['Lobby features','Hospitality suites','Residential focal walls'],
		benefits:['Material-led impact','Custom textures','Integrated lighting options']
	},
	{
		id:'lift-marble-flooring',
		name:'Lift Marble Flooring',
		preview:'Premium marble flooring solutions for luxury homes, hotels, villas, commercial spaces, and architectural projects.',
		img:'/src/assets/services/liftmarbleflooring.png',
		description:'Premium marble flooring solutions for luxury homes, hotels, villas, commercial spaces, and architectural projects.',
		process:'We design, source, cut and install premium marble flooring with precision layout planning, high-end finishing and careful polishing to create a seamless luxury surface that elevates the entire space.',
		applications:['Custom Marble Flooring','Italian Marble Flooring','Luxury Residential Flooring','Commercial & Hotel Flooring','Precision Installation','Large Format Marble Layouts','Pattern & Border Designs','Premium Finishing & Polishing'],
		benefits:['Luxury visual depth and reflection','High-end finish tailored to premium interiors','Suitable for residential and hospitality projects','Precise installation for long-lasting performance']
	},
	{
		id:'consultation',
		name:'Consultation',
		preview:'Material direction and project support from concept to delivery.',
		img:'/src/assets/services/consultation.png',
		description:'Expert consultation on material selection, detailing, procurement and fabrication workflow to ensure project success.',
		process:'Site assessment, material sampling, technical drawings and project coordination.',
		applications:['Design teams','Builders','Developers'],
		benefits:['Project expertise','Material sourcing','Fabrication oversight']
	}
];

export const projects=[
	['The Noida Residence','Residential · Italian Marble'],
	['Aravalli Villa','Luxury Villa · CNC & Onyx'],
	['The Atrium Hotel','Hospitality · Wall Panels'],
	['Mehra Penthouse','Residential · Inlay Work'],
	['Elysian Office','Commercial · Corian'],
	['Temple Restoration','Heritage · Stone Craft']
];
