import React from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container1">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <fragment>
                      <span className="cta26-text4 thq-heading-2">
                        Book Your Equine Therapy and Meditation Retreat Today
                      </span>
                    </fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <fragment>
                      <span className="cta26-text5 thq-body-large">
                        Experience the healing power of horses and meditation in
                        a serene natural setting.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    {props.action1 ?? (
                      <fragment>
                        <span className="cta26-text3">Book Now</span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

CTA26.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA26
