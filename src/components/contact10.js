import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact10-text10 thq-heading-2">
                    Contact Us
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="contact10-text09 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact10-text06 thq-heading-3">
                    Main Office
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="contact10-text07 thq-body-large">
                    1234 Horse Haven Way, Retreat City, Earth
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact10-text08 thq-heading-3">
                    Secondary Office
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="contact10-text11 thq-body-large">
                    5678 Equine Path, Serenity Springs, Earth
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'Main Office Location Image',
  location1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1528319725582-ddc096101511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2: undefined,
  content1: undefined,
  heading1: undefined,
  location2Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1535440724399-15ca4f772090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Secondary Office Location Image',
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
