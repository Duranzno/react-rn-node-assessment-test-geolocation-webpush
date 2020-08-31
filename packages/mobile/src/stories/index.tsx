import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';
import { SosafeDataTemplate } from 'common';
import {
  MappedLocation,
  DetailedData,
  ListDataRow,
  Button,
} from 'components';

const centerViewDecorator = (
  getStory: () => ReactElement,
): ReactElement => <CenterView>{getStory()}</CenterView>;

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(centerViewDecorator)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('DetailedData', module)
  .addDecorator(centerViewDecorator)
  .add('generic', () => <DetailedData data={SosafeDataTemplate} />);

storiesOf('MapMarker', module)
  .addDecorator(centerViewDecorator)
  .add('generic', () => (
    <MappedLocation marker={SosafeDataTemplate.location} />
  ));
storiesOf('ListDataRow', module)
  .addDecorator(centerViewDecorator)
  .add('generic', () => (
    <ListDataRow
      goToDetails={action('this would take you its details')}
      data={SosafeDataTemplate}
    />
  ));
