import PropTypes from 'prop-types';

import Painting from '../Panting';

import './PaintingList.css';

export default function PaintingList({ items }) {
  return (
    <ul className="painting-list">
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            authorName={item.author.tag}
            authorUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
