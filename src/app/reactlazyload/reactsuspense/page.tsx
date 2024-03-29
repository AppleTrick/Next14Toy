"use client";

import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./lazycomponent"));

export default function ReactSuspenseLazyRedering() {
  return (
    <div>
      <h1>My React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
