import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-outstanding-doctor'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className="title-section">Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='img-customize section-outstanding-doctor'>
                            <div className='img-child section-outstanding-doctor'></div> 
                            <div className='position text-center'>
                                <div>Giáo sư tiến sĩ </div>
                                <div>Cơ xương khớp</div>                             
                            </div>                          
                        </div>
                        <div className='img-customize section-outstanding-doctor'>
                            <div className='img-child section-outstanding-doctor'></div>
                            <div className='position text-center'>
                                <div>Giáo sư tiến sĩ </div>
                                <div>Cơ xương khớp</div>                             
                            </div>    
                        </div>
                        <div className='img-customize section-outstanding-doctor'>
                            <div className='img-child section-outstanding-doctor'></div>
                            <div className='position text-center'>
                                <div>Giáo sư tiến sĩ </div>
                                <div>Cơ xương khớp</div>                             
                            </div>    
                        </div>
                        <div className='img-customize section-outstanding-doctor'>
                            <div className='img-child section-outstanding-doctor'></div>
                            <div className='position text-center'>
                                <div>Giáo sư tiến sĩ </div>
                                <div>Cơ xương khớp</div>                             
                            </div>    
                        </div>
                        <div className='img-customize section-outstanding-doctor'>
                            <div className='img-child section-outstanding-doctor'></div>
                            <div className='position text-center'>
                                <div>Giáo sư tiến sĩ </div>
                                <div>Cơ xương khớp</div>                             
                            </div>    
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
