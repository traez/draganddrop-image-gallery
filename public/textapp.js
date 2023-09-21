<div className="section-gallery-div">
{galleryData.map((item, index) => (
  <article key={index}>
    <div className="flag-container">
      <Image
        src={`/images/${item.flag}`}
        alt=""
        fill
        sizes="(min-width: 400px) 100vw"
        data-country={item.country.toLowerCase()}
        data-continent={item.continent.toLowerCase()}
      />
    </div>
    <ul>
      <li>{item.country}</li>
      <li>{item.continent}</li>
    </ul>
  </article>
))}
</div>

