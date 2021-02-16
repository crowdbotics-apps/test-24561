import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps206302Navigator from '../features/Maps206302/navigator';
import Additem206301Navigator from '../features/Additem206301/navigator';
import Maps206297Navigator from '../features/Maps206297/navigator';
import UserProfile206293Navigator from '../features/UserProfile206293/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps206302: { screen: Maps206302Navigator },
Additem206301: { screen: Additem206301Navigator },
Maps206297: { screen: Maps206297Navigator },
UserProfile206293: { screen: UserProfile206293Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
