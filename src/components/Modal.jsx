import React, { useEffect } from 'react';

export default function Modal({ open, onClose, title, children, largeImg }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }

    if (!open) return undefined;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modalPanel" onClick={e => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} aria-label="Close">×</button>
        {largeImg && (
          <div className="modalImage">
            <img src={largeImg} alt={title || 'Material preview'} loading="lazy" />
          </div>
        )}
        <div className="modalContent">
          {title && (
            <div className="modalHeader">
              <h2>{title}</h2>
            </div>
          )}
          <div className="modalBody">{children}</div>
        </div>
      </div>
    </div>
  );
}
