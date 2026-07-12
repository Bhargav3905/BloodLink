import Loader from './Loader';

const OverlayLoader = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm dark:bg-slate-900/70">
      <Loader />
    </div>
  );
};

export default OverlayLoader;