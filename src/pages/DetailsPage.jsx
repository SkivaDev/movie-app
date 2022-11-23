import React from 'react'
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { movieSlug } = useParams();

  // React.useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [slug]);

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage