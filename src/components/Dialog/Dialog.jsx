import './Dialog.css';

export default function Dialog({ backgroundColor, onClose, content }) {
  return (
    <div className="dialog-overlay">
      <div className="dialog" style={{ backgroundColor }}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        {content}
      </div>
    </div>
  );
}
