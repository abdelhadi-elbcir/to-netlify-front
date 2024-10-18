import React, { useEffect, useState } from 'react';

const Popup = ({ message, error, onClose, duration = 3000 }) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 100) {
          clearInterval(timer);
          setIsVisible(false);
          setTimeout(onClose, 300);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      maxWidth: '300px',
      width: '100%',
      zIndex: 50,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 300ms ease-in-out'
    }}>
      <div style={{
        backgroundColor: error ? '#f8f9fa' : '#f8f9fa',
        borderColor: error ? 'red' : 'primary',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '6px',
        padding: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <span style={{
            fontWeight: 'bold',
            color: error ? '#red' : 'primary'
          }}>
            {error ? 'Erreur' : 'Succès'}
          </span>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              color: error ? 'red' : 'primary'
            }}
          >
            ×
          </button>
        </div>
        <p style={{ marginBottom: '12px' }}>{message}</p>
        <div style={{
          height: '4px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div
            style={{
              height: '100%',
              backgroundColor: error ? '#DC2626' : '#0284C7',
              width: `${(remainingTime / duration) * 100}%`,
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;