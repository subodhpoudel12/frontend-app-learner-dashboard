import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@edx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import { hooks } from 'data/redux';
import messages from './messages';

export const ViewCourseButton = ({ cardId }) => {
  const { marketingUrl } = hooks.useCardCourseRunData(cardId);
  const { hasAccess } = hooks.useCardEnrollmentData(cardId);
  const { isEntitlement, isExpired } = hooks.useCardEntitlementData(cardId);
  const { isMasquerading } = hooks.useMasqueradeData();
  const { formatMessage } = useIntl();
  return (
    <Button
      disabled={isMasquerading || !hasAccess || (isEntitlement && isExpired)}
      as="a"
      href={marketingUrl}
    >
      {formatMessage(messages.viewCourse)}
    </Button>
  );
};
ViewCourseButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default ViewCourseButton;