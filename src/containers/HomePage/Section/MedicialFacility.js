import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicialFacility.scss';
import Slider from 'react-slick';
class MedicialFacility extends Component {

    render() {
        return (
            <div className='section-medicial-facility'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className="title-section">Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='img-customize'>
                            <div className='img-child medical-facility'></div>                           
                            <div className='title-customize'>Phòng khám bệnh viện Đại học y dược</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child medical-facility'></div>
                            <div className='title-customize'>Bệnh viện x</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child medical-facility'></div>
                            <div className='title-customize'>Trung tâm khám sức khỏe định kì</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child medical-facility'></div>
                            <div className='title-customize'>Chuyên khoa 1</div>
                        </div>
                        <div className='img-customize'>
                            <div className='img-child medical-facility'></div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicialFacility);
