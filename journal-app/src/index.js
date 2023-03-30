import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import {theme} from './consts/theme'
import JournalApp from './JournalApp'
import GlobalStyle from './styles/globalStyles'
import 'modern-normalize/modern-normalize.css'

ReactDOM.createRoot(document.getElementById('app')).render(
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <JournalApp />
    </ThemeProvider>
)
