// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.errorCard}>
            <div style={styles.icon}>⚠️</div>
            <h1 style={styles.title}>Oops! Something went wrong</h1>
            <p style={styles.message}>
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            <div style={styles.buttonGroup}>
              <button 
                onClick={() => window.location.href = '/'}
                style={styles.homeButton}
              >
                Go to Home
              </button>
              <button 
                onClick={() => window.location.reload()}
                style={styles.reloadButton}
              >
                Refresh Page
              </button>
            </div>

            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error Details (Development Only)</summary>
                <div style={styles.errorDetails}>
                  <p><strong>Error:</strong> {this.state.error.toString()}</p>
                  <p><strong>Stack Trace:</strong></p>
                  <pre style={styles.stackTrace}>
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '2rem'
  },
  errorCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    textAlign: 'center'
  },
  icon: {
    fontSize: '5rem',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '2rem',
    color: '#2d5016',
    marginBottom: '1rem'
  },
  message: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  homeButton: {
    padding: '1rem 2rem',
    background: '#6b9e3e',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  reloadButton: {
    padding: '1rem 2rem',
    background: '#f4a220',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  details: {
    marginTop: '2rem',
    textAlign: 'left',
    background: '#f8f9fa',
    padding: '1rem',
    borderRadius: '10px'
  },
  summary: {
    cursor: 'pointer',
    fontWeight: '600',
    color: '#e63946',
    marginBottom: '1rem'
  },
  errorDetails: {
    fontSize: '0.9rem',
    color: '#333'
  },
  stackTrace: {
    background: '#1a1a1a',
    color: '#00ff00',
    padding: '1rem',
    borderRadius: '5px',
    overflow: 'auto',
    fontSize: '0.85rem',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  }
};

export default ErrorBoundary;