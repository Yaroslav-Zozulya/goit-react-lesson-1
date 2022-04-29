export default function Painting(props) {
  const { authorName, authorUrl, price, title, url } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName} </a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличие</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
