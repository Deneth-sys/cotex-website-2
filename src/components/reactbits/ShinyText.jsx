import React from 'react';

export default function ShinyText({ text, speed = 2.5, className = "" }) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#a0a0b8]/40 via-white to-[#a0a0b8]/40 bg-[length:200%_100%] animate-shine ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
}