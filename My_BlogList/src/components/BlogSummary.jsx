//Each component to be able to stand on its own feet, having had information passed into it from above. 
//In the definition of the function,
//you have some expectations of what's gonna be passed into you. 
//the calling code has expectations of the function, and that the function should do its best to fulfill those expectations. (like contract)

import './BlogSummary.css';

const BlogSummary = (props) => {
    return (
        <div className="blog_summary">
            <h2>{ props.title }</h2>
            <p>By { props.author }</p>
            <p>Date: { props.date }</p>
            <a href={ props.url }>Would You Like To Know More?</a>
        </div>);
};

export default BlogSummary;

