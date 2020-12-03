
import React from 'react'

// Modules
import FilterableUserList from './user-interface/FilterableUserList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas)

function App(){
	return <FilterableUserList />
} 


export default App;
