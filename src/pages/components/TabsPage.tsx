import { ComponentPage } from '../ComponentPage';
import { Tabs } from '@skybaer0804/pui/Tabs';
import { Stack } from '@skybaer0804/pui/Layout';

export function TabsPage() {
  return (
    <ComponentPage
      title="Tabs"
      description="Tabs 컴포넌트는 여러 탭으로 콘텐츠를 구성합니다."
    >
      <Stack spacing="md">
        <Tabs
          items={[
            { value: 'tab1', label: '탭 1', content: '첫 번째 탭의 콘텐츠입니다.' },
            { value: 'tab2', label: '탭 2', content: '두 번째 탭의 콘텐츠입니다.' },
            { value: 'tab3', label: '탭 3', content: '세 번째 탭의 콘텐츠입니다.' },
          ]}
        />
      </Stack>
    </ComponentPage>
  );
}

