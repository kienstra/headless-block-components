/**
 * External dependencies
 */
import * as React from 'react'
import { __ } from '@wordpress/i18n'

/**
 * @typedef {Object} ExampleProps
 * @property {Object} [attrs] The block attributes available on the front-end.
 * @property {Object} [attributes] The block attributes available in the block editor.
 */

/**
 * An email opt-in block.
 *
 * This isn't connected to a back-end.
 * It simply waits a second after submission
 * and displays the success message.
 *
 * @param {ExampleProps} props
 * @return {React.ReactElement} An example preview component.
 */
const EmailOptIn = (props) => {
  const attributes = props.attrs ? props.attrs : props.attributes
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  return (
    <div>
      <h3 className='text-lg mb-4'>{attributes.heading}</h3>
      {isSubmitted ? (
        <div className='mt-4'>
          {isSuccess ? (
            <p>{attributes['submission-message']}</p>
          ) : (
            <div>{__('Sending...', 'headless-blocks')}</div>
          )}
        </div>
      ) : (
        <div>
          <p>{attributes['main-copy']}</p>
          <input
            label={__('First name', 'headless-blocks')}
            className='mr-4 h-8 rounded-sm border border-gray-600 mt-2 px-2 text-sm'
            placeholder={__('First name', 'headless-blocks')}
            type='text'
          />
          <input
            className='mr-4 h-8 rounded-sm border border-gray-600 mt-2 px-2 text-sm'
            label={__('Email', 'headless-blocks')}
            placeholder={__('Your email', 'headless-blocks')}
            type='text'
          />
          <button
            className='h-8 px-3 bg-blue-700 text-white rounded-sm text-sm'
            onClick={() => {
              setIsSubmitted((isSubmitted) => !isSubmitted)
              setTimeout(() => setIsSuccess((isSuccess) => !isSuccess), 2000)
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
