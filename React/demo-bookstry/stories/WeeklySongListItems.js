import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WeeklySongListItem from '../src/components/WeeklySongListItem';

storiesOf('WeeklySongListItem', module)
  .addDecorator(withInfo)
  .add(
      'default',
      () => (
        <WeeklySongListItem
            order="01"
            singer="Tiên Tiên, Touliver"
            title="Em không thể"
            viewCount={3000}
        />
    )
  );