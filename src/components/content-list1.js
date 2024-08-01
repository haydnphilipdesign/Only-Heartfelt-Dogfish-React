import React from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <fragment>
                    <span className="content-list1-text10 thq-heading-2">
                      About Equine Therapy
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <fragment>
                    <span className="content-list1-text11 thq-body-small">
                      Learn about the healing benefits of equine therapy and how
                      it can help in self-discovery and personal growth through
                      interactions with horses.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <fragment>
                    <span className="content-list1-text08 thq-heading-3">
                      Meditation Workshops
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <fragment>
                    <span className="content-list1-text07 thq-body-small">
                      Participate in guided meditation sessions to relax the
                      mind, body, and soul, and learn techniques to incorporate
                      meditation into your daily life.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <fragment>
                    <span className="content-list1-text04 thq-heading-3">
                      Nature Walks
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <fragment>
                    <span className="content-list1-text05 thq-body-small">
                      Immerse yourself in the beauty of nature with guided walks
                      that allow you to connect with the environment and find
                      peace and tranquility.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <fragment>
                    <span className="content-list1-text thq-heading-3">
                      Book Your Retreat
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <fragment>
                    <span className="content-list1-text06 thq-body-small">
                      Explore our retreat options and book a transformative
                      experience that combines equine therapy, meditation, and
                      nature activities.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <fragment>
                    <span className="content-list1-text09 thq-heading-3">
                      Testimonials
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <fragment>
                    <span className="content-list1-text03 thq-body-small">
                      Read about the life-changing experiences of our guests and
                      how the retreat has helped them in their personal journey
                      of healing and self-discovery.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <fragment>
                    <span className="content-list1-text02 thq-heading-3">
                      Benefits of Equine Therapy
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <fragment>
                    <span className="content-list1-text01 thq-body-small">
                      Discover the physical, emotional, and mental benefits of
                      equine therapy, including stress relief, improved
                      communication skills, and increased self-awareness.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  heading4: undefined,
  content6: undefined,
  heading6: undefined,
  content5: undefined,
  heading3: undefined,
  content3: undefined,
  content4: undefined,
  content2: undefined,
  heading2: undefined,
  heading5: undefined,
  heading1: undefined,
  content1: undefined,
}

ContentList1.propTypes = {
  heading4: PropTypes.element,
  content6: PropTypes.element,
  heading6: PropTypes.element,
  content5: PropTypes.element,
  heading3: PropTypes.element,
  content3: PropTypes.element,
  content4: PropTypes.element,
  content2: PropTypes.element,
  heading2: PropTypes.element,
  heading5: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default ContentList1
