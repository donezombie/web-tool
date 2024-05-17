import CommonIcons from 'components/CommonIcons';
import BaseUrl from 'consts/baseUrl';

const useHandleAsideMenu = () => {
  return [
    [
      {
        label: 'Homepage',
        icon: CommonIcons.HomeIcon,
        href: BaseUrl.Homepage,
      },

      {
        label: 'Base64',
        icon: CommonIcons.Dataset,
        href: BaseUrl.Base64,
      },
    ],
  ];
};

export default useHandleAsideMenu;
