
// ==========================================
// 📄 File: src/components/ui/Input.tsx
// ==========================================
import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, helperText, className = '', required, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        
        <div className={styles.inputContainer}>
          {icon && <div className={styles.icon}>{icon}</div>}
          
          <input
            ref={ref}
            className={`${styles.input} ${icon ? styles.inputWithIcon : ''} ${error ? styles.error : ''} ${className}`}
            {...props}
          />
        </div>
        
        {error && <p className={styles.errorMessage}>{error}</p>}
        {helperText && !error && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
