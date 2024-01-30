import React, { Suspense } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import MicrosoftClarity from './MicrosoftClarity';
import { GoogleTagManager } from './GoogleTagManager';

const Metrics = () => {
  return (
    <Suspense>
      <GoogleTagManager />
      <GoogleAnalytics />
      <MicrosoftClarity />
    </Suspense>
  );
};

export default Metrics;
