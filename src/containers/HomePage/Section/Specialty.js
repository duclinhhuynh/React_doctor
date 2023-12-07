import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class Specialty extends Component {
    
    render() {  
       
        return (
            <div className='section-specialty'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='img-customize'>
                            <div className='img-child specialty'></div>                           
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child specialty'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child specialty'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child specialty'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child specialty'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
