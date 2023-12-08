import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class About extends Component {
    
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
            <div className='section-about'>
                <div className='section-about-header'>
                    Tryền thông nói gì về sức khỏe của bạn
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/eqK-yQNdvtA" title="[ Vietsub + Kara ] Fox Rain - Lee Sun Hee ( My Girlfriend Is A Gumiho OST )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                    Hãy xem qua trang đồng hồ thế giới. Sau đó, chọn và nhấn vào tên thành phố trong danh sách các quốc gia có sẵn trên đồng hồ xem giờ thế giới để thay đổi múi giờ của đồng hồ. Đồng hồ internet sẽ cập nhật giờ mới phù hợp. Để cài đặt lại, nhấn vào tên thành phố được chọn ở dưới đồng hồ.
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
