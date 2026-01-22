import { ComponentPage } from '../ComponentPage';
import { Table } from '@skybaer0804/pui/Table';
import { Stack } from '@skybaer0804/pui/Stack';

export function TablePage() {
  return (
    <ComponentPage
      title="Table"
      description="Table 컴포넌트는 데이터를 테이블 형식으로 표시합니다."
    >
      <Stack spacing="md">
        <Table
          columns={[
            { key: 'name', header: '이름' },
            { key: 'age', header: '나이' },
            { key: 'city', header: '도시' },
          ]}
          rows={[
            { name: '홍길동', age: 30, city: '서울' },
            { name: '김철수', age: 25, city: '부산' },
            { name: '이영희', age: 28, city: '대구' },
          ]}
        />
      </Stack>
    </ComponentPage>
  );
}

