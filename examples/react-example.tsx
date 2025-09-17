import React from 'react';
import { Ellipsis } from 'react-text-ellipsis-clamp';

const App: React.FC = () => {
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>React Text Ellipsis Clamp Examples</h1>
      
      {/* Basic Usage */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
        <h2>Basic Usage (2 lines)</h2>
        <div style={{ background: 'white', padding: '15px', borderRadius: '4px', border: '1px solid #dee2e6' }}>
          <Ellipsis maxLines={2}>
            {longText}
          </Ellipsis>
        </div>
      </section>

      {/* Expandable */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
        <h2>Expandable (3 lines)</h2>
        <div style={{ background: 'white', padding: '15px', borderRadius: '4px', border: '1px solid #dee2e6' }}>
          <Ellipsis maxLines={3} expandable>
            {longText}
          </Ellipsis>
        </div>
      </section>

      {/* Different HTML Elements */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
        <h2>Different HTML Elements</h2>
        <div style={{ background: 'white', padding: '15px', borderRadius: '4px', border: '1px solid #dee2e6' }}>
          <h3>As Paragraph:</h3>
          <Ellipsis as="p" maxLines={2}>
            {longText}
          </Ellipsis>
          
          <h3>As Span:</h3>
          <Ellipsis as="span" maxLines={1}>
            {longText}
          </Ellipsis>
        </div>
      </section>

      {/* Custom Styling */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
        <h2>Custom Styling</h2>
        <div style={{ background: 'white', padding: '15px', borderRadius: '4px', border: '1px solid #dee2e6' }}>
          <Ellipsis 
            maxLines={2} 
            style={{ 
              color: '#e74c3c', 
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: '1.8'
            }}
          >
            {longText}
          </Ellipsis>
        </div>
      </section>

      {/* Real-world Example */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
        <h2>Real-world Example: Article Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[1, 2, 3].map(i => (
            <article key={i} style={{ border: '1px solid #dee2e6', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ padding: '20px' }}>
                <h3>Article Title {i}</h3>
                <Ellipsis maxLines={3} expandable>
                  This is a sample article description that demonstrates how the ellipsis component works in a real-world scenario. It shows how text can be truncated and expanded in article cards, blog posts, or any content that needs to be summarized.
                </Ellipsis>
                <div style={{ marginTop: '15px' }}>
                  <button style={{ 
                    background: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 16px', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
