import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="testimonial17-text16 thq-heading-2">
                  Testimonials
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial17-text24 thq-body-small">
                  My experience at the Equine Therapy and Meditation Retreat was
                  truly transformative. The connection with the horses and the
                  serene surroundings helped me find inner peace like never
                  before.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial17-text18 thq-body-large">
                            Sarah Johnson
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial17-text21 thq-body-small">
                            Yoga Instructor
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text22 thq-body-small">
                        I cannot recommend this retreat enough. The combination
                        of equine therapy and meditation is powerful and
                        healing.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial17-text27 thq-body-large">
                            Michael Smith
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Mindfulness Coach
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        Being in the presence of these majestic animals while
                        practicing mindfulness was a profound experience. I left
                        feeling rejuvenated and centered.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial17-text20 thq-body-large">
                            Emily Chen
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial17-text14 thq-body-small">
                            Wellness Blogger
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text25 thq-body-small">
                        The Equine Therapy and Meditation Retreat provided a
                        unique opportunity to connect with nature and oneself. I
                        left with a sense of clarity and gratitude.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial17-text19 thq-body-large">
                            David Rodriguez
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial17-text17 thq-body-small">
                            Life Coach
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text23 thq-body-small">
                        I have attended many retreats, but this one stands out
                        for its holistic approach to well-being. The horses
                        added a special element that enhanced the entire
                        experience.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Alt: 'Image of David Rodriguez',
  author3Position: undefined,
  author2Position: undefined,
  heading1: undefined,
  author4Position: undefined,
  author2Alt: 'Image of Michael Smith',
  author4Src:
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1706325377060-0af0e8e52fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1521434095289-4c29c71ba6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of Sarah Johnson',
  author4Name: undefined,
  author3Alt: 'Image of Emily Chen',
  author3Name: undefined,
  author1Position: undefined,
  review1: undefined,
  review4: undefined,
  content1: undefined,
  review3: undefined,
  review2: undefined,
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1444720895098-cbd6b640c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjU0NzI1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author4Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Position: PropTypes.element,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author1Position: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  content1: PropTypes.element,
  review3: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
}

export default Testimonial17
