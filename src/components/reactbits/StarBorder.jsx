export default function StarBorder({
  as: Component = 'div',
  className = '',
  color = '#00ccff',
  speed = '6s',
  children,
  ...rest
}) {
  return (
    <Component className={`relative inline-block overflow-hidden rounded-3xl p-[1px] ${className}`} {...rest}>
      {/* Rotating Border Beam */}
      <div
        className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] pointer-events-none"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 75%, ${color} 100%)`,
          animationDuration: speed
        }}
      />
      {/* Inner Card Container */}
      <div className="relative z-10 w-full h-full rounded-3xl bg-[#0a0a14]/95 backdrop-blur-2xl">
        {children}
      </div>
    </Component>
  );
}