/**
 * External dependencies
 */
import * as React from 'react'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'

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
const Example = (props) => {
  const attributes = props.attrs ? props.attrs : props.attributes;

  return (
    <div>
      <p>{__('This is an alternate preview component', 'headless-blocks')}</p>
      <p>
        {__(
          'Here is the value of the new-field attribute, if it exists:',
          'headless-blocks'
        )}
      </p>
      <p>{attributes['new-field']}</p>
    </div>
  );
}

export default Example
