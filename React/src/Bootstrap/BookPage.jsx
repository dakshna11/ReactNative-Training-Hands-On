import React from 'react'
import ebook from './assets/ebook-cover.png'
import kindle from './assets/kindle.png'

const MainComp = ()=> {
    return(
        <div>
            {/* Navbar*/}
         
            <nav className='navbar'>
                <div className='container-xxl'>
                    <a href='#intro' className='navbar-brand'>
                        <span className="fw-bold text-secondary">Net Ninja Pro - the Book</span>
                    </a>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#topics">About The Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Get in Touch</a>
                        </li>
                        <li className="nav-item d-md-none">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item ms-2 d-none d-md-inline">
                            <a className="btn btn-secondary" href="#pricing">buy now</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
            <section id="intro">
                <div className='container-lg'>
                    <div className='row justify-content-center align-items-center'>
                        <div className="col-md-5 text-center text-md-start">
                            <h1>
                                <div className="display-2">Black-Belt</div>
                                <div className='display-5 text-muted'>Your Coding Skills</div>
                            </h1>
                            <p className='lead my-4 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <a href='#pricing' className='btn btn-secondary btn-lg'>Buy Now</a>
                        </div>
                        <div className="col-md-5 text-center d-none d-md-block">
                            <img src={ebook} className='img-fluid' alt='ebook'/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Plans */}
            <section id="pricing" className='bg-light mt-5'>
                <div className='container-lg'>
                    <div className='text-center'>
                        <h2>Pricing Plans</h2>
                        <p className='lead text-muted'>Choose a pricing plan to suit you</p>
                    </div>
                    <div className='row my-5 align-items-center justify-content-center'>
                        <div className='col-8 col-lg-4 col-xl-3'>
                            <div className='card border-0'>
                                <div className="card-body text-center py-4">
                                    <h4 className='card-title'>Starter Edition</h4>
                                    <p className='lead card-subtitile'>eBook download only</p>
                                    <p className='display-5 my-4 text-primary fw-bold'>$12.99</p>
                                    <p className='card-text mx-5 text-muted d-none d-lg-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href='#' className='btn btn-outline-primary btn-lg mt-3'>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 col-lg-4">
                        <div className="card border-primary border-2">
                            <div className="card-header text-center text-primary">Most Popular</div>
                            <div className="card-body text-center py-5">
                            <h4 className="card-title">Complete Edition</h4>
                            <p className="lead card-subtitle">eBook download & all updates</p>
                            <p className="display-4 my-4 text-primary fw-bold">$18.99</p>
                            <p className="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
                            <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                                Buy Now
                            </a>
                            </div>
                        </div>
                        </div>

                        <div className="col-8 col-lg-4 col-xl-3">
                        <div className="card border-0">
                            <div className="card-body text-center py-4">
                            <h4 className="card-title">Ultimate Edition</h4>
                            <p className="lead card-subtitle">download, updates & extras</p>
                            <p className="display-5 my-4 text-primary fw-bold">$24.99</p>
                            <p className="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
                            <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                                Buy Now
                            </a>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Accordions */}
            <section id="topics">
            <div class="container-md">
      <div class="text-center">
        <h2>Inside the Book...</h2>
        <p class="lead text-muted">A quick glance at the topics you'll learn</p>
      </div>
      <div class="row my-5 g-5 justify-content-around align-items-center">
        <div class="col-6 col-lg-4">
          <img src={kindle} class="img-fluid" alt="ebook"/>
        </div>
        <div class="col-lg-6">
          <i className='bi bi-star-fill'></i>
          {/* <!-- accordion --> */}
          <div class="accordion" id="chapters">
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                  Chapter 1 - Your First Web Page
                </button>
              </h2>
              <div id="chapter-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                <div class="accordion-body">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">
                  Chapter 2 - Mastering CSS
                </button>
              </h2>
              <div id="chapter-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
                <div class="accordion-body">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
                  Chapter 3 - The Power of JavaScript
                </button>
              </h2>
              <div id="chapter-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
                <div class="accordion-body">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                  Chapter 4 - Storing Data (Firebase Databases)
                </button>
              </h2>
              <div id="chapter-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
                <div class="accordion-body">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                  Chapter 5 - User Authentication
                </button>
              </h2>
              <div id="chapter-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                <div class="accordion-body">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
    {/* Review  */}
    <section id="reviews" class="bg-light">
    <div class="container-lg">
      <div class="text-center">
        <h2><i class="bi bi-stars"></i>Book Reviews</h2>
        <p class="lead">What my students have said about the book...</p>
      </div>

      <div class="row justify-content-center my-5">
        <div class="col-lg-8">
          <div class="list-group">
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
              <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
              <small>Review by Mario</small>
            </div>
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
              <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
              <small>Review by Mario</small>
            </div>
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
              <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
              <small>Review by Mario</small>
            </div>
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
              <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
              <small>Review by Mario</small>
            </div>
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
              <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
              <small>Review by Mario</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
       
        
    )
}

export default MainComp