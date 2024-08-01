import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <fragment>
                    <span className="steps2-text19 thq-heading-2">
                      Introduction to Equine Therapy
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <fragment>
                    <span className="steps2-text18 thq-body-small">
                      Learn about the benefits of equine therapy and how it can
                      help in personal growth and healing.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <fragment>
                    <span className="steps2-text16 thq-heading-2">
                      Meditation Sessions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <fragment>
                    <span className="steps2-text15 thq-body-small">
                      Participate in guided meditation sessions in serene
                      natural surroundings to promote relaxation and
                      mindfulness.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <fragment>
                    <span className="steps2-text21 thq-heading-2">
                      Interactive Horse Activities
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <fragment>
                    <span className="steps2-text20 thq-body-small">
                      Engage in hands-on activities with horses to build trust,
                      communication, and emotional awareness.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <fragment>
                    <span className="steps2-text17 thq-heading-2">
                      Nature Walks and Reflection
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <fragment>
                    <span className="steps2-text22 thq-body-small">
                      Take peaceful walks in nature to reflect on your
                      experiences and connect with the environment.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step2Description: undefined,
  step2Title: undefined,
  step4Title: undefined,
  step1Description: undefined,
  step1Title: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Title: PropTypes.element,
  step1Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
