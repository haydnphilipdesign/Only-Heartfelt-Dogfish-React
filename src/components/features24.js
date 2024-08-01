import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features24-text1 thq-heading-2">
                      Equine Therapy Sessions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features24-text4 thq-body-small">
                      Engage in therapeutic activities with our gentle horses
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features24-text3 thq-heading-2">
                      Emotional Healing with Horses
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features24-text2 thq-body-small">
                      Interact with horses to promote emotional healing
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features24-text thq-heading-2">
                      Guided Meditation in Nature
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features24-text5 thq-body-small">
                      Experience deep relaxation and connection with nature
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Meditation in nature',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1604042241733-b4c9b0c107a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature2ImgAlt: 'Emotional healing with horses',
  feature1ImgAlt: 'Horse therapy session',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1564934304178-9e12cfc0ab91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI2MXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
}

export default Features24
