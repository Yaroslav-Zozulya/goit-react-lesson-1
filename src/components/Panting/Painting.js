import PropTypes from 'prop-types';
import './Panting.css';

export default function Painting(props) {
  const { authorName, authorUrl, price, title, url, quantity } = props;
  return (
    <div className="item-style">
      <img src={url} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName} </a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличие'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
