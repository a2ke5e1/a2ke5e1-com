export const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-dvh flex-col p-2.5">
    <div className="flex flex-1 flex-col rounded-2xl bg-surface-container-lowest">
      {children}
    </div>
  </div>
);