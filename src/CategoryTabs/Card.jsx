const Card = ({ title, price, text, image, category }) => {
  return (
    <article className="card">
      <div className="card-image">
        <img src={image} alt={category} />
      </div>

      <div className="card-texts">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>

      <div className="card-para">
        <p>{text}</p>
      </div>
    </article>
  )
}

export default Card