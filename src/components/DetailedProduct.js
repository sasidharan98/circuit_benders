import React from 'react'
import './DetailedProduct.css'
const DetailedProduct = () => {
    return (
      <div className="productscreen">

          <div className="productscreen__left">
            <div className="left__image">
              <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='' />
            </div>
            <div className="left__info">
              <p className="left__name">Prod name</p>
              <p>Price: 10</p>
              <p>Description: React Hook useEffect has a missing dependency: 'd'. Either include it or remove the dependency array</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: 1000
                <span></span>
              </p>
              <p>
                Status:
                <span>
                "Out of Stock"
                </span>
              </p>
              <p>
                Qty
              </p>
              <p>
                <button type="button" >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
          </div>
  
    )
}

export default DetailedProduct
