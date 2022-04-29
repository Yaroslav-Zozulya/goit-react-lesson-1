import Painting from './components/Painting';
import data from './data.json';

export default function App() {
  return (
    <div>
      <Painting
        url={data.url}
        title={data.title}
        authorName={data.author.tag}
        authorUrl={data.author.url}
        price={data.price}
      />
    </div>
  );
}
