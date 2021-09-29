import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const items = [
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'},
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'},
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'},
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'},
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'},
    {name:'first-item', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU'}
  ]
  return (
    <div className="row row-cols-1 row-cols-md-6 g-4">
    {
      items.map(item => <Card
      item ={item}
      ></Card>)
    }
    
  </div>
  );
}

export default App;
