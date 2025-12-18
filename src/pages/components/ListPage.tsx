import { ComponentPage } from '../ComponentPage';
import { List, ListItem, ListItemText } from '@skybaer0804/pui/List';
import { Stack } from '@skybaer0804/pui/Layout';

export function ListPage() {
  return (
    <ComponentPage
      title="List"
      description="List 컴포넌트는 항목 목록을 표시하는 데 사용됩니다."
    >
      <Stack spacing="md">
        <List>
          <ListItem>
            <ListItemText primary="첫 번째 항목" secondary="부제목 텍스트" />
          </ListItem>
          <ListItem divider>
            <ListItemText primary="두 번째 항목" secondary="부제목 텍스트" />
          </ListItem>
          <ListItem>
            <ListItemText primary="세 번째 항목" secondary="부제목 텍스트" />
          </ListItem>
        </List>
      </Stack>
    </ComponentPage>
  );
}

