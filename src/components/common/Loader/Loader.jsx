import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.backDrop}>
      <div className={s.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
