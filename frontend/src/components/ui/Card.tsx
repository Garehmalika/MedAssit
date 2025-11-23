

// ==========================================
// 📄 File: src/components/ui/Card.tsx
// ==========================================
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
}) => {
  const paddingClass = `padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`;
  
  const classes = [
    styles.card,
    styles[paddingClass],
    hover && styles.hover,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;

