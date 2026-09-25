import React, { useState } from 'react';
import { Hero, Title, CTA } from '../components/UI';
import { materials } from '../data/content';
import { Material } from '../components/Cards';
import Modal from '../components/Modal';

export default function Materials() {
  const [modal, setModal] = useState({ open: false, type: null, data: null });

  function openMaterial(material) {
    setModal({ open: true, type: 'material', data: material });
  }

  function closeModal() {
    setModal({ open: false, type: null, data: null });
  }

  return (
    <>
      <Hero tag="The collection" title="Stone, in all its possibilities." copy="A rich range of natural and engineered surfaces, carefully matched to the way a space will live." />
      <section className="section container">
        <Title tag="Material library" title="Find the surface that speaks to the space." />
        <div className="materials">
          {materials.map((x, i) => (
            <Material key={x.id || x.name} x={x} i={i} onDiscover={openMaterial} />
          ))}
        </div>
      </section>
      <section className="section dark">
        <div className="container application">
          <Title tag="Selected with purpose" title="Beauty must also perform." copy="We help navigate movement, durability, maintenance and light." />
          <p>Flooring · Feature walls · Vanity tops · Kitchen counters · Facades · Staircases · Furniture · Sacred spaces</p>
        </div>
      </section>
      <CTA />

      <Modal open={modal.open} onClose={closeModal} title={modal.data?.name} largeImg={modal.data?.img}>
        {modal.type === 'material' && modal.data && (
          <>
            <p><strong>Description</strong></p>
            <p>{modal.data.description}</p>
            <p><strong>Best Used For</strong></p>
            <ul>{modal.data.applications?.map((a, i) => <li key={i}>{a}</li>)}</ul>
            <p><strong>Advantages</strong></p>
            <ul>{modal.data.advantages?.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </>
        )}
      </Modal>
    </>
  );
}
