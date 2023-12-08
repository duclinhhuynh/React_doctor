import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HandBook extends Component {
    
    render() {  
        let settings = {
            dots: false,
            arrow: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        }
        return (
            <div className='section-handbook'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className="title-section">Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <div className='img-child handbook'></div>                           
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child handbook'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child handbook'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child handbook'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child handbook'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                    </Slider>    
                    </div>
                </div>    
            </div>    
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        // inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
