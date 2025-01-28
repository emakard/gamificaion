// src/components/ui/card.js
export default function Card({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
