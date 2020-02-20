import React from 'react';
import blogData from './blogData'
import BlogComponets from './blogComponents'
import 'bootstrap/dist/css/bootstrap.min.css';
import './clean-blog.min.css'



function App() {
  const blogedComponents = blogData.map(data => <BlogComponets
  key = {data.title}
  title = {data.title}
  subtitle = {data.subTitle}
  author = {data.author}
  date = {data.date}
  />)
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
          {blogedComponents}
          </div>
        </div>
      
      </div>
    
    </div>
  );
}

export default App;
