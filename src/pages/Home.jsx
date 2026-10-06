import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaAward,FaGem,FaTools,FaUsers} from 'react-icons/fa';
import {Title} from '../components/UI'; // Removed the two homepage hero CTA buttons; the navbar "Call Now" button remains unchanged.
import {services,projects} from '../data/content';
import {Service,Project} from '../components/Cards';
import Modal from '../components/Modal';
import LogoCarousel from '../components/LogoCarousel';
import logo1 from '../assets/logos/a1.png';
import logo2 from '../assets/logos/a2.png';
import logo3 from '../assets/logos/a3.png';
import logo4 from '../assets/logos/a4.png';
import logo5 from '../assets/logos/a5.png';
import logo6 from '../assets/logos/a6.png';

const stats=[
  ['500+','Projects completed',FaAward],
  ['15+','Years experience',FaGem],
  ['100%','Bespoke fabrication',FaTools],
  ['Trusted','By architects',FaUsers]
];

export default function Home(){
  // Note: modal state consolidated below

    // single modal state: { open: bool, type: 'service'|null, data: object|null }
    const [modal,setModal]=useState({open:false,type:null,data:null});
  
    function openService(s){ setModal({open:true,type:'service',data:s}); }
    function closeModal(){ setModal({open:false,type:null,data:null}); }

  const logos=[
    {src:logo1,alt:'Architect'},
    {src:logo2,alt:'Designer'},
    {src:logo3,alt:'Builder'},
    {src:logo4,alt:'Developer'},
    {src:logo5,alt:'Corporate'},
    {src:logo6,alt:'Hospitality'}
  ];

  return (
    <>
      <section className="homehero">
        <div className="container heroCopy">
          <i>Bhardwaj Marbles · Est. 1987</i>
          <h1>Crafting timeless <em>luxury</em> in stone.</h1>
          <p>Premium marble, granite, onyx, Corian, CNC art and bespoke stone craftsmanship for spaces made to be remembered.</p>
          {/* Removed: homepage hero CTA buttons "Explore Collection" and "Call Now". The header navbar call button remains unchanged. */}
        </div>
      </section>

      {/* Running Logo Carousel - moved directly below the Hero section */}
      <section className="section container logosec">
        <LogoCarousel logos={logos} />
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

      {/* Selected Work */}
      <section className="section container">
        <Title tag="Selected work" title="Spaces with a point of view."/>
        <div className="projects">
          {projects.slice(0,4).map((x,i)=> <Project key={x[0]} x={x} i={i} />)}
        </div>
        <Link className="more" to="/projects">Enter the project archive →</Link>
      </section>

      <section className="stats container stats-post-project">
        {stats.map(([n,t,I])=> <div key={t}><I/><strong>{n}</strong><small>{t}</small></div>)}
      </section>

      {/* Single modal is controlled via `modal` state */}
      <Modal open={modal.open} onClose={closeModal} title={modal.data?.name} largeImg={modal.data?.img}>
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
