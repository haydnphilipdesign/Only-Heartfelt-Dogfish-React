import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo1"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link1 ?? (
                <fragment>
                  <span className="footer4-text05 thq-body-small">
                    About Us
                  </span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link2 ?? (
                <fragment>
                  <span className="footer4-text09 thq-body-small">
                    Services
                  </span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link3 ?? (
                <fragment>
                  <span className="footer4-text11 thq-body-small">Events</span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link4 ?? (
                <fragment>
                  <span className="footer4-text06 thq-body-small">
                    Contact Us
                  </span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link5 ?? (
                <fragment>
                  <span className="footer4-text10 thq-body-small">FAQ</span>
                </fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-footer-links">
              <span>
                {props.privacyLink ?? (
                  <fragment>
                    <span className="footer4-text04 thq-body-small">
                      Privacy Policy
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <fragment>
                    <span className="footer4-text08 thq-body-small">
                      Terms and Conditions
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <fragment>
                    <span className="footer4-text07 thq-body-small">
                      Cookies Policy
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  privacyLink: undefined,
  link1: undefined,
  link4: undefined,
  cookiesLink: undefined,
  logoAlt: 'Equine Therapy and Meditation Retreat Logo',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  termsLink: undefined,
  link2: undefined,
  link5: undefined,
  link3: undefined,
}

Footer4.propTypes = {
  privacyLink: PropTypes.element,
  link1: PropTypes.element,
  link4: PropTypes.element,
  cookiesLink: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link5: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer4
