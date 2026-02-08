import { useState, useEffect } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(true);

  // Sync with the extension's storage
  useEffect(() => {
    chrome.storage.local.get(['protectionActive'], (res) => {
      setIsActive(res.protectionActive ?? true);
    });
  }, []);

  const toggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    chrome.storage.local.set({ protectionActive: newState });
  };

  return (
    <div style={{ width: '220px', padding: '15px', background: '#121212', color: 'white', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Shield Control</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '14px' }}>AI Detection</span>
        <button 
          onClick={toggle} 
          style={{ 
            backgroundColor: isActive ? '#4CAF50' : '#f44336',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isActive ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}
