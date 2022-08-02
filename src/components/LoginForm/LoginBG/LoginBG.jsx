import s from "./LoginBG.module.scss";

export const LoginBG = () => {
  return (
    <div className={s.loginBG}>
      <div className={s.banana}></div>
      <div className={s.leaves}></div>
      <div className={s.strawberry}></div>
      <svg
        fill="F0F1F3"
        width="603"
        height="816"
        viewBox="0 0 603 816"
        xmlns="http://www.w3.org/2000/svg"
        className={s.grey}
      >
        <path
          d="M206 259C51.6 271.8 6 403.667 1.5 468C-8.1 648.4 119.167 775.167 185 816H603V-0.000244141C603 -0.000244141 574.5 24.4998 570 68.9997C533 262 534.5 291 467.5 300.5C400.5 310 316 249.881 206 259Z"
          fill="#F0F1F3"
        />
      </svg>
    </div>
  );
};
