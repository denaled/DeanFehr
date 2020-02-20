import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './clean-blog.min.css'

function BlogComponets (props){
    return(
        <div className="post-preview">
          <a href="post.html">
          <h2 className="post-title">{props.title}</h2>
          <h3 className="post-subtitle">{props.subtitle}</h3> 
          <p className="post-meta">Posted by  {props.author} on {props.date}</p>
          </a>
          <hr/>
        </div>
    )
}

export default BlogComponets