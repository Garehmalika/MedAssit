
// ==========================================
// 📄 File: src/components/ui/Alert.tsx
// ==========================================
import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import styles from './Alert.module.css';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  title?: string;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  title,
  onClose,
  className = '',
}) => {
  const icons = {
    success: <CheckCircle className={styles.icon} size={20} />,
    error: <AlertCircle className={styles.icon} size={20} />,
    warning: <AlertTriangle className={styles.icon} size={20} />,
    info: <Info className={styles.icon} size={20} />,
  };

  const classes = [styles.alert, styles[type], className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert">
      {icons[type]}
      
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <p className={styles.message}>{message}</p>
      </div>
      
      {onClose && (
        <button onClick={onClose} className={styles.closeButton} aria-label="Fermer">
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default Alert;
