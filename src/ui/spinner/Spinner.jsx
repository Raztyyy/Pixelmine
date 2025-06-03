function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
