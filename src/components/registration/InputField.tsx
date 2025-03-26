
import React from 'react';
import { Input } from '@/components/ui/input';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  icon: LucideIcon;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  pattern?: string;
  maxLength?: number;
  required?: boolean;
}

const InputField = ({ 
  icon: Icon, 
  type, 
  value, 
  onChange, 
  placeholder, 
  className = "",
  pattern,
  maxLength,
  required = false
}: InputFieldProps) => {
  return (
    <div className="flex">
      <div className="inline-flex items-center px-3 py-2 bg-purple-100 border border-r-0 border-purple-300 rounded-l-md">
        <Icon className="h-5 w-5 text-purple-700" />
      </div>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-l-none py-6 border-purple-300 focus:border-purple-500 focus:ring-purple-500 ${className}`}
        pattern={pattern}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
};

export default InputField;
