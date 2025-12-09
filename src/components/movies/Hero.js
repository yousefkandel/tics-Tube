import React from 'react'

function Hero({ path}) {
  return (
    <>
    <section className="tt-breadcrumb">
            <div className="tt-breadcrumb-container">
                <h1 className="tt-breadcrumb-title">Our Movies</h1>
                <div className="tt-breadcrumb-nav">
                    <a href={'/'}><i className="flaticon-home"></i>Home</a>
                    <span className="separator"><i className="flaticon-right-arrow"></i></span>
                    <span className="current-page">{path}</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero