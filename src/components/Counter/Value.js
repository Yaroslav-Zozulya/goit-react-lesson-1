import s from './Counter.module.css';

const Value = ({ counterValue }) => <span className={s.counterValue}>{counterValue}</span>;

export default Value;
