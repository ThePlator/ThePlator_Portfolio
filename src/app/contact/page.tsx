import Contact from '@/components/Contact';
import IconFooter from '@/components/IconFooter';
import React from 'react';

function page() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <Contact />
      <IconFooter />
    </div>
  );
}

export default page;
