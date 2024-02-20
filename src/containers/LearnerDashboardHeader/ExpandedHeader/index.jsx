import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import WidgetNavbar from 'containers/WidgetContainers/WidgetNavbar';
import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';
import { EXPANDED_NAVBAR } from 'widgets/RecommendationsPaintedDoorBtn/constants';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import { useIsCollapsed, findCoursesNavClicked } from '../hooks';
import messages from '../messages';
import BrandLogo from '../BrandLogo';

export const ExpandedHeader = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const isCollapsed = useIsCollapsed();
  const exploreCoursesClick = findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));

  return (
    !isCollapsed && (
      <header className="d-flex shadow-sm align-items-center learner-variant-header pl-4">
        <div className="flex-grow-1 d-flex align-items-center">
          <BrandLogo />
          <a
            className="ml-2 text-white"
            style={{ textDecoration: 'none' }}
            href="/"
          >
            {formatMessage(messages.course)}
          </a>
          <a
            className="ml-4 text-white"
            style={{ textDecoration: 'none' }}
            href={urls.programsUrl}
          >
            {formatMessage(messages.program)}
          </a>
          <a
            className="ml-4 text-white"
            style={{ textDecoration: 'none' }}
            href={urls.baseAppUrl(courseSearchUrl)}
            onClick={exploreCoursesClick}
          >
            {formatMessage(messages.discoverNew)}
          </a>
          <WidgetNavbar placement={EXPANDED_NAVBAR} />
          <span className="flex-grow-1" />
        </div>
        <AuthenticatedUserDropdown />
      </header>
    )
  );
};

ExpandedHeader.propTypes = {};

export default ExpandedHeader;
