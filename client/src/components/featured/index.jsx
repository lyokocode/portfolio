import "./featured.scss"

export const Featured = () => {
    return (
        <section className="featuredContainer">
            {/* featured title */}
            <h1 className="title"><b> Hey, Aelita here!</b> Discover my stories and creative ideas.</h1>

            {/* popular post */}
            <div className="post">
                <div className="imgContainer">
                    <img className="image" src="/vite.svg" alt='popular blog image' />
                </div>
                <div className="textContainer">
                    <h2 className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit.</h2>
                    <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, repellat eos. Aspernatur culpa aut dolorum accusantium ex dignissimos voluptatum provident.</p>
                    <button className="postBtn">Read More </button>
                </div>
            </div>
        </section>
    )
}
