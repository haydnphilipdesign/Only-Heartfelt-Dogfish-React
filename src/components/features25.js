import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features25-text3 thq-heading-2">
                      Equine Therapy Sessions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features25-text2 thq-body-small">
                      Experience the healing power of horses through our guided
                      equine therapy sessions led by experienced professionals.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features25-text1 thq-heading-2">
                      Meditation Workshops
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features25-text4 thq-body-small">
                      Join our meditation workshops in serene natural settings
                      to find inner peace and balance.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features25-text thq-heading-2">
                      Nature Walks
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features25-text5 thq-body-small">
                      Immerse yourself in the beauty of nature with our guided
                      nature walks that promote mindfulness and relaxation.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Title: undefined,
  feature2Title: undefined,
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1608319617895-b7ebdf52729a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2Description: undefined,
  feature1ImgAlt: 'Equine Therapy Session Image',
  feature2ImgAlt: 'Meditation Workshop Image',
  feature3ImgAlt: 'Nature Walk Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
}

Features25.propTypes = {
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features25
