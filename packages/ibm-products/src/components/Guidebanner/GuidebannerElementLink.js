/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from '@carbon/react';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner__element-link`;
const componentName = 'GuidebannerElementLink';

/**
 * A link styled specifically for the GuidebannerElement.
 */
export let GuidebannerElementLink = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={cx(blockClass, className)}
      kind="ghost"
      role="link"
      size="md"
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </Link>
  );
};

// Return a placeholder if not released and not enabled by feature flag
GuidebannerElementLink = pkg.checkComponentEnabled(
  GuidebannerElementLink,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
GuidebannerElementLink.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
GuidebannerElementLink.propTypes = {
  /**
   * Provide the contents of the GuidebannerElementLink.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
