import React from 'react'

import PropTypes from 'prop-types'

import './features21.css'

const Features21 = (props) => {
  return (
    <div className="features21-layout349 thq-section-padding">
      <div className="features21-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="features21-container thq-flex-column thq-card">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features21-image thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature1Title ?? (
              <fragment>
                <span className="features21-text12 thq-heading-2">
                  Equine Therapy Sessions
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.feature1Description ?? (
              <fragment>
                <span className="features21-text14 thq-body-small">
                  Experience the healing power of interacting with horses in our
                  therapy sessions led by experienced professionals.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="features21-container1 thq-flex-column thq-card">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features21-image1 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature2Title ?? (
              <fragment>
                <span className="features21-text13 thq-heading-2">
                  Guided Meditations
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.feature2Description ?? (
              <fragment>
                <span className="features21-text09 thq-body-small">
                  Immerse yourself in guided meditations surrounded by the
                  serene beauty of nature and the calming presence of horses.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="features21-container2 thq-flex-column thq-card">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features21-image2 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature3Title ?? (
              <fragment>
                <span className="features21-text08 thq-heading-2">
                  Workshops and Retreats
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.feature3Description ?? (
              <fragment>
                <span className="features21-text15 thq-body-small">
                  Join our workshops and retreats designed to promote
                  self-discovery, emotional well-being, and personal growth
                  through horse interactions and nature experiences.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="features21-container3 thq-flex-column thq-card">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="features21-image3 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature4Title ?? (
              <fragment>
                <span className="features21-text10 thq-heading-2">
                  Nature Walks
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.feature4Description ?? (
              <fragment>
                <span className="features21-text11 thq-body-small">
                  Embark on peaceful nature walks in the company of our gentle
                  horses, allowing you to connect with the natural world and
                  find inner peace.
                </span>
              </fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Features21.defaultProps = {
  feature3Title: undefined,
  feature2Description: undefined,
  feature1ImageAlt: 'Equine Therapy Session Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzQ1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature2ImageAlt: 'Guided Meditation Image',
  feature3ImageAlt: 'Workshops and Retreats Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1563198128-65634738479f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzQ1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description: undefined,
  feature1Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzQ1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1578496458288-4a2dd143e3c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzQ1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Description: undefined,
  feature4ImageAlt: 'Nature Walks Image',
  feature3Description: undefined,
}

Features21.propTypes = {
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features21
