/**
 * External dependencies
 */
import * as React from 'react'

/**
 * @typedef {Object} ExampleProps
 * @property {Object} [attrs] The block attributes available on the front-end.
 * @property {Object} [attributes] The block attributes available in the block editor.
 */

/**
 * An example block component.
 *
 * @param {ExampleProps} props
 * @return {React.ReactElement} An example preview component.
 */
const EmailOptIn = (props) =>{
  const attributes = props.attrs ? props.attrs : props.attributes
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <div>
      <h1>{attributes.heading}</h1>
      {isSubmitted ? (
        <p>{attributes['submission-message']}</p>
      ) : (
        <div>
          <p>{attributes['main-copy']}</p>
          <input type='email' />
          <button
            onClick={() => {
              setIsSubmitted((isSubmitted) => !isSubmitted)
            }}
          >
            {attributes['button-text']}
          </button>
        </div>
      )}
    </div>
  )
}

export default EmailOptIn
