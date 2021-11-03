import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import App from '../App'
import Styles from '../Styles/StylesBasics'

const screens= {
    NextScreen:{
        screen: Styles
    },
    Home:{
        screen: App
    }

}

const FirstNav = createStackNavigator(screens)

export default createAppContainer(FirstNav)