
import React from 'react';
import { CustomButton } from '@/components/ui/CustomButton';

const MobileHeader = () => {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-200 md:hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Removed Bizsimpl name as requested */}
          </div>
          <CustomButton variant="outline" size="sm">
            Need Help?
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
