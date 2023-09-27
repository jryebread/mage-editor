import {Pane} from '../tabs';
import {useApplication} from '../../contexts';
import {Expandable} from '../fields';
import {MetaFieldView} from '../meta';
import {Button, Group, Label, Separator, TextBoxInput} from '../controls';

export function Create() {
  // const {settings} = useApplication();

  return (
    <Pane title="Create 🧙" id="prompt-input-panel">
      <Separator size={1} />
      <TextBoxInput/>

        <Group>
          <Label />
          <Button onClick={() => console.log("WOOH!")} main>
           Magic!
          </Button>
        </Group>
      {/* <Expandable title={settings.appearance.name} open>
        <MetaFieldView field={settings.appearance} />
      </Expandable>
      <Expandable title={settings.defaults.name}>
        <MetaFieldView field={settings.defaults} />
      </Expandable> */}
    </Pane>
  );
}
