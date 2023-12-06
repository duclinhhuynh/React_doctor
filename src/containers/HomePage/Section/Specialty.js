import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialtyImg from '../../../assets/specialty/112457-co-xuong-khop.jpg'
class Specialty extends Component {
    
    render() {  
        let settings = {
            dots: false,
            arrow: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <div className='specialty-header'>
                        <span>Chuyên khoa phổ biến</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <div className='img-child'></div>                           
                            <div>Chuyen khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child'></div>
                            <div>Chuyen khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child'></div>
                            <div>Chuyen khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child'></div>
                            <div>Chuyen khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child'></div>
                            <div>Chuyen khoa 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
