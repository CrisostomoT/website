import React from 'react';

//Custom styles/Libraries
import Bounce from 'react-reveal/Bounce';
import './style.css';

const Content = () => {
    return (
        <div>
            <Bounce>
                <h1 className='text-landing'>Welcome!</h1>
                <h4 className='text-landing'>This is my website, where I can show off a couple projects that I've done :)</h4>
            </Bounce>
            <hr />
            <div>
                <p className='website-about'>About this website:</p>
                <p className='website-about'>
                    This website was built with React <img alt='React logo' style={{ width: '20px' }}
                        src='https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png'
                    />,
                JavaScript <img alt='JavaScript logo' style={{ width: '20px' }}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
                    />,
               CSS <img alt='CSS logo' style={{ width: '25px' }}
                        src='https://i0.wp.com/www.ceef.net/wp-content/uploads/2016/03/css-logo.png?fit=500%2C500&ssl=1'
                    />,
                HTML <img alt='HTML logo' style={{ width: '25px' }}
                        src='https://i0.wp.com/www.ceef.net/wp-content/uploads/2016/03/html5-logo.png?fit=500%2C500&ssl=1'
                    /> and
                React-Bootstrap <img alt='React bootstrap logo' style={{ width: '23px' }}
                        src='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2018/05/react-bootstrap-tutorial.png?fit=544%2C472&ssl=1'
                    />
                </p>
            </div>
            <div className='projects-section'>

            </div>
        </div>
    )
}

export default Content