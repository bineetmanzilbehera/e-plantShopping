<div className="product-grid">
  {plantsArray.map(category => (
    <div key={category.category}>
      <h2>{category.category}</h2>

      <div className="category-grid">
        {category.plants.map(plant => (
          <div className="product-card" key={plant.name}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>{plant.cost}</p>

            <button
              disabled={addedToCart[plant.name]}
              onClick={() => handleAddToCart(plant)}
            >
              {addedToCart[plant.name]
                ? 'Added to Cart'
                : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
