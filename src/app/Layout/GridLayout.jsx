

export const OneColumn = ({children}) => (
  <div className="grid grid-cols-1 gap-4">{children}</div>
);

export const TwoColumnResponsive = ({children}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
);

export const ThreeColumnDesktop = ({children}) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{children}</div>
);

export const NestedTwoInThree = ({children}) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
    <div></div>
  </div>
);

export const AutoFitColumns = ({children}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{children}</div>
);
