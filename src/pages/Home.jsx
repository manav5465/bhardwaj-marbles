import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaAward,FaGem,FaTools,FaUsers} from 'react-icons/fa';
import {Btn,Title,CTA} from '../components/UI';
import {materials,services,projects} from '../data/content';
import {Material,Service,Project} from '../components/Cards';
import Modal from '../components/Modal';
import CNC from '../components/CNC';
import LogoCarousel from '../components/LogoCarousel';

const stats=[
  ['500+','Projects completed',FaAward],
  ['15+','Years experience',FaGem],
  ['100%','Bespoke fabrication',FaTools],
  ['Trusted','By architects',FaUsers]
];

export default function Home(){
  // Note: modal state consolidated below

    // single modal state: { open: bool, type: 'material'|'service'|null, data: object|null }
    const [modal,setModal]=useState({open:false,type:null,data:null});
  
    function openMaterial(m){ setModal({open:true,type:'material',data:m}); }
    function openService(s){ setModal({open:true,type:'service',data:s}); }
    function closeModal(){ setModal({open:false,type:null,data:null}); }

  const logos=[
    {src:'/src/assets/logos/a1.png',alt:'Architect'},
    {src:'/src/assets/logos/a2.png',alt:'Designer'},
    {src:'/src/assets/logos/a3.png',alt:'Builder'},
    {src:'/src/assets/logos/a4.png',alt:'Developer'},
    {src:'/src/assets/logos/a5.png',alt:'Corporate'},
    {src:'/src/assets/logos/a6.png',alt:'Hospitality'}
  ];

  return (
    <>
      <section className="homehero">
        <div className="container heroCopy">
          <i>Bhardwaj Marbles · Est. 1987</i>
          <h1>Crafting timeless <em>luxury</em> in stone.</h1>
          <p>Premium marble, granite, onyx, Corian, CNC art and bespoke stone craftsmanship for spaces made to be remembered.</p>
          <Btn to="/materials">Explore collection</Btn>
          <Btn to="/contact" plain>Call now</Btn>
        </div>
      </section>
      {/* CNC Work — new module immediately after Hero */}
      <CNC onExplore={()=>openService(services.find(s=>s.id==='cnc'))} />

      <section className="stats container">
        {stats.map(([n,t,I])=> <div key={t}><I/><strong>{n}</strong><small>{t}</small></div>)}
      </section>

      {/* What We Make */}
      <section className="section dark">
        <div className="container">
          <Title tag="What we make" title="Technical capability, made beautiful."/>
          <div className="services">
            {services.map(s=> <Service key={s.id} x={s} onKnowMore={openService} />)}
          </div>
        </div>
      </section>

      {/* Materials, Curated */}
      <section className="section container">
        <Title tag="Materials, curated" title="Nature’s rarest surfaces, selected for your story." copy="A considered material library spanning the elemental to the exceptional."/>
        <div className="materials">
          {materials.map((m,i)=> <Material key={m.id} x={m} i={i} onDiscover={openMaterial} />)}
        </div>
        <Link className="more" to="/materials">View all materials →</Link>
      </section>

      {/* Running Logo Carousel */}
      <section className="section container logosec">
        <LogoCarousel logos={logos} />
      </section>

      {/* Selected Work */}
      <section className="section container">
        <Title tag="Selected work" title="Spaces with a point of view."/>
        <div className="projects">
          {projects.slice(0,4).map((x,i)=> <Project key={x[0]} x={x} i={i} />)}
        </div>
        <Link className="more" to="/projects">Enter the project archive →</Link>
      </section>

      {/* The Bhardwaj Standard + CTA (kept minimal here; existing content remains in project) */}
      <section className="section why">
        <div className="container split">
          <div>
            <i>The Bhardwaj standard</i>
            <h2>Craft does not happen by accident.</h2>
            <p>Our approach blends technical precision with timeless aesthetics for every project.</p>
          </div>
          <div>
            <CTA to="/contact">Start your project</CTA>
          </div>
        </div>
      </section>

      {/* Single modal is controlled via `modal` state */}
      <Modal open={modal.open} onClose={closeModal} title={modal.data?.name} largeImg={modal.data?.img}>
        {modal.type === 'material' && modal.data && (
          <>
            <p><strong>Description</strong></p>
            <p>{modal.data.description}</p>
            <p><strong>Best Used For</strong></p>
            <ul>{modal.data.applications?.map((a,i)=> <li key={i}>{a}</li>)}</ul>
            <p><strong>Advantages</strong></p>
            <ul>{modal.data.advantages?.map((a,i)=> <li key={i}>{a}</li>)}</ul>
          </>
        )}
        {modal.type === 'service' && modal.data && (
          <>
            <p><strong>Overview</strong></p>
            <p>{modal.data.description}</p>
            <p><strong>How It Works</strong></p>
            <p>{modal.data.process}</p>
            <p><strong>Applications</strong></p>
            <ul>{modal.data.applications?.map((a,i)=> <li key={i}>{a}</li>)}</ul>
            <p><strong>Why Choose Bhardwaj Marbles</strong></p>
            <ul>{modal.data.benefits?.map((b,i)=> <li key={i}>{b}</li>)}</ul>
          </>
        )}
      </Modal>
    </>
  )
}
