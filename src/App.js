// import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
// import Box from './components/Box/Box';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';

// import data from './BD.json';
import './index.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div>
      {/* <Box type="large" classNames="red" styles={{ color: 'white' }} />
      <Box type="medium" />
      <Box /> */}
      {/* <Counter initialValue={10} />
      <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
      {/* <PaintingList items={data} /> */}
    </div>
  );
}
