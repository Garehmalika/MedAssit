// ==========================================
// 📄 File: src/components/ui/Button.tsx
// ==========================================
import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading && styles.loading,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && leftIcon && <span style={{ marginRight: '0.5rem' }}>{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span style={{ marginLeft: '0.5rem' }}>{rightIcon}</span>}
    </button>
  );
};

export default Button;


