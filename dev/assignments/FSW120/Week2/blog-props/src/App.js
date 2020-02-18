import React from 'react';
import blogData from './blogData'
import BlogComponets from './blogComponents'


function App() {
  const blogedComponents = blogData.map(data => <BlogComponets
  key = {data.title}
  title = {data.title}
  subtitle = {data.subTitle}
  author = {data.author}
  date = {data.date}
  />)
  
  return (
    <div>
     {blogedComponents}
    </div>
  );
}

export default App;
