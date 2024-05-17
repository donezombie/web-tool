import React from 'react';
import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material';
import useHandleAsideMenu from 'hooks/useHandleAsideMenu';
import { Link } from 'react-router-dom';

const Apps = () => {
  //! State
  const theme = useTheme();
  const asideMenu = useHandleAsideMenu();

  //! Function

  //! Render
  return (
    <CommonStyles.Box className='component:Apps' sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {asideMenu.map((el) => {
        return el.map((item) => {
          return (
            <Link key={item.label} to={item.href} className='is-hover unstyle-link'>
              <CommonStyles.Box
                sx={{
                  p: 2,
                  border: `1px solid ${theme.colors?.borderBaseAlpha}`,
                  borderRadius: 2,
                  display: 'flex',
                  gap: 3,
                }}
              >
                <item.icon /> {item.label}
              </CommonStyles.Box>
            </Link>
          );
        });
      })}
    </CommonStyles.Box>
  );
};

export default React.memo(Apps);
