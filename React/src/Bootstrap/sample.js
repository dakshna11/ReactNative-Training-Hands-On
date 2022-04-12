import React from 'react'

const SampleComp = () => {
    return (
        <div>
            {/* display heading */}
            <h1 className='display-1'>Hello</h1>
            <h1 className='display-2'>Hello</h1>
            <h1 className='display-6'>Hello</h1>
            {/* Text align */}
            <p className='text-center'>Welcome</p>
            <p className='text-end'>Welcome</p>
            <p className='text-start'>Welcome</p>
            {/* text-decoration & font weight*/ }
            <p className='text-decoration-underline'>this is a underlined text</p>
            <p className='text-decoration-line-through'>this is a line-through text</p>
            <p className='fw-bold'>bold text</p>
            <small>small text</small>
            {/* text-colors */}
            <p className='text-primary'>theme primary</p>
            <p className='text-secondary'>theme secondary</p>
            <p className='text-info'>theme info</p>
            <p className='text-warning'>theme warning</p>
            <p className='text-success'>theme success</p>
            <p className='text-danger'>theme danger</p>
            <p className='text-muted'>theme muted</p>
            {/* bg-colors */}
            <p className='text-white bg-primary'>bg-primary</p>
            {/* Grid */}
            <div className='container-lg my-5'>
                <h2>Basic Grid</h2>
                <div className='row'>
                    <div className='col'>
                        <div className='p-5 bg-primary text-light'>col 1</div>
                    </div>
                    <div className='col'>
                        <div className='p-5 bg-primary text-light'>col 2</div>
                    </div>
                    <div className='col'>
                        <div className='p-5 bg-primary text-light'>col 3</div>
                    </div>
                </div>
            </div>
            <div className='container-lg my-5'>
                <h2>Column Width</h2>
                <div className='row'>
                    <div className='col-6'>
                        <div className='p-5 bg-primary text-light'>col 1</div>
                    </div>
                    <div className='col-3'>
                        <div className='p-5 bg-primary text-light'>col 2</div>
                    </div>
                    <div className='col-3'>
                        <div className='p-5 bg-primary text-light'>col 3</div>
                    </div>
                </div>

            </div>
            <div className='container-lg my-5'>
                <h2>Responsive Column Width</h2>
                <div className='row'>
                    <div className='col-sm-4 col-lg-6'>
                        <div className='p-5 bg-primary text-light'>col 1</div>
                    </div>
                    <div className='col-sm-4 col-lg-3'>
                        <div className='p-5 bg-primary text-light'>col 2</div>
                    </div>
                    <div className='col-sm-4 col-lg-3'>
                        <div className='p-5 bg-primary text-light'>col 3</div>
                    </div>
                </div>
                <div className='container-lg-my-5'>
                    <h2>Justifying columns</h2>
                    <div className='row justify-content-center'>
                        <div className='col-md-3'>
                            <div className='p-5 bg-primary text-light'>col 1</div>
                        </div>
                        <div className='col-md-3'>
                            <div className='p-5 bg-primary text-light'>col 2</div>
                        </div>
                        <div className='col-md-3'>
                            <div className='p-5 bg-primary text-light'>col 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default SampleComp
