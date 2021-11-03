/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Permission from './Permission';
import Drawerlayout from './DrawerLayout';
import Toast from './Toast';
import Animated from './Animated';
import Sectionlist from './Sectionlist';
import SampleDimensions from './Dimensions';
import Link from './Link';
import Styles from './Styles/StylesBasics';
import FirstNav from './Navigation/FirstNav';
import ModalSample from './Modal';
import KeyboardAvoidingComponent from './Keyboard';
import Refresh from './Refresh';
import Flat from './FlatList';
import Justify from './Styles/Justify';
import {name as appName} from './app.json';


//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Refresh);
AppRegistry.registerComponent(appName, () => Justify);
