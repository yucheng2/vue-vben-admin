import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const test: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: 'test',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'TestIndex',
      component: () => import('@/views/test/test/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default test;
