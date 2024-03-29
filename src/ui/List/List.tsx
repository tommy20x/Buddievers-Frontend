import React, { Fragment } from 'react';
import ListMaterial from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import { useClasses, useThemeOptions } from 'hooks';
import { styles } from './List.styles';


type ListProps = {
  listItems: {
    image?: string;
    primaryText: string;
    secondaryText?: string;
  }[];
};

export const List = ({ listItems }: ListProps) => {
  const { isDarkTheme } = useThemeOptions();
  const { divider } = useClasses(styles);
  return (
    <ListMaterial>
      {listItems.map(({ primaryText, image, secondaryText }) => (
        <Fragment key={primaryText}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={image || isDarkTheme ? 'assets/images/logo_white.svg' : 'assets/images/logo.svg'} />
            </ListItemAvatar>
            <ListItemText primary={primaryText} secondary={secondaryText} />
          </ListItem>
          <Divider variant="fullWidth" className={divider} />
        </Fragment>
      ))}
    </ListMaterial>
  );
};
