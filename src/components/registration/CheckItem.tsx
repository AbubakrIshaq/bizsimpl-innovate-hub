
import React from 'react';
import { Check } from 'lucide-react';

interface CheckItemProps {
  text: string;
}

const CheckItem = ({ text }: CheckItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-purple-700/20 p-2 rounded-full">
        <Check className="h-4 w-4 text-white" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CheckItem;
