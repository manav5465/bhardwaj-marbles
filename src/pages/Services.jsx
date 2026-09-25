import React, { useState } from 'react';
import { Hero, Title, CTA } from '../components/UI';
import { services } from '../data/content';
import { Service } from '../components/Cards';
import Modal from '../components/Modal';

export default function Services() {
  const [modal, setModal] = useState({ open: false, type: null, data: null });

  function openService(service) {
    setModal({ open: true, type: 'service', data: service });
  }

  function closeModal() {
    setModal({ open: false, type: null, data: null });
  }

  return (
    <>
      <Hero tag="Capabilities" title="Where material intelligence meets craftsmanship." copy="We offer the technical range to turn a drawn detail, a raw slab or an ambitious gesture into resolved architecture." />
      <section className="section container">
        <Title tag="Our practice" title="Made for the details that define a space." />
        <div className="services">
          {services.map((x) => (
            <Service key={x.id} x={x} onKnowMore={openService} />
          ))}
        </div>
      </section>
      <section className="section why">
        <div className="container split">
          <div>
            <i>Precision in every plane</i>
            <h2>Custom fabrication is our natural language.</h2>
            <p>Our CNC-led process lets us produce exact curves, reliefs and repeatable patterns without losing stone’s tactile quality.</p>
          </div>
          <p className="goldline">Design collaboration<br />Material sampling<br />Fabrication drawings<br />Installation support</p>
        </div>
      </section>
      <CTA />

      <Modal open={modal.open} onClose={closeModal} title={modal.data?.name} largeImg={modal.data?.img}>
        {modal.type === 'service' && modal.data && (
          <>
            <p><strong>Overview</strong></p>
            <p>{modal.data.description}</p>
            <p><strong>How It Works</strong></p>
            <p>{modal.data.process}</p>
            <p><strong>Applications</strong></p>
            <ul>{modal.data.applications?.map((a, i) => <li key={i}>{a}</li>)}</ul>
            <p><strong>Why Choose Bhardwaj Marbles</strong></p>
            <ul>{modal.data.benefits?.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </>
        )}
      </Modal>
    </>
  );
}
