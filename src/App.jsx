import Section from './components/Section';
import PaintingList from './components/PaintingList';
import data from './BD.json';

export default function App() {
  return (
    <div>
      <Section title="some text">
        <PaintingList items={data} />
      </Section>
    </div>
  );
}
