import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Button from '@material-ui/core/Button'
import TopBar from './components/TopBar'
import NearCard from './components/NearCard'

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
}

const App = () => (
	<div>
		<TopBar />
		<NearCard
			title="Qualcosa di vicino"
			sub="Testo a cazzo di cane"
			distance="200 m"
		/>
	</div>
)

render(<App />, document.getElementById('root'))
