"use client";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 3,
}: InputProps) {
  const baseClasses = "w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-primary-cyan focus:glow-cyan placeholder:text-gray-500";

  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={baseClasses}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={baseClasses}
    />
  );
}
