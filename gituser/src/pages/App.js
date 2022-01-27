import Body from '../pages/body/style';
import Profile from '../components/profile/index'
import Header from '../pages/header/index'
import { ThemeContextProvider } from '../provider/themeContext';




function App() {
  return (

    <ThemeContextProvider>
      <Body>
        <Header />
        <Profile />
      </Body>
    </ThemeContextProvider>
  )
}

export default App;