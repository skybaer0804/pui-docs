import { ComponentPage } from '../ComponentPage';
import { Accordion } from '@skybaer0804/pui/Accordion';
import { Stack } from '@skybaer0804/pui/Layout';

export function AccordionPage() {
  return (
    <ComponentPage
      title="Accordion"
      description="Accordion 컴포넌트는 접을 수 있는 콘텐츠 섹션을 표시합니다."
    >
      <Stack spacing="md">
        <Accordion
          items={[
            {
              value: 'item1',
              label: '첫 번째 항목',
              content: '첫 번째 항목의 콘텐츠입니다.',
            },
            {
              value: 'item2',
              label: '두 번째 항목',
              content: '두 번째 항목의 콘텐츠입니다.',
            },
            {
              value: 'item3',
              label: '세 번째 항목',
              content: '세 번째 항목의 콘텐츠입니다.',
            },
          ]}
        />
      </Stack>
    </ComponentPage>
  );
}

