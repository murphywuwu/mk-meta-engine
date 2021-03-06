import { start, AppLoader } from 'mk-app-loader'
import config from './config'
import action from './action'
import reducer from './reducer'
import wrapper from './wrapper'
import componentFactory from './componentFactory'
import templateFactory from './templateFactory'
import defaultComponent from './defaultComponent'
//import tryCatchError from './reactTryCatchBatchingStrategy'

export default {
	start,
	config,
	action,
	reducer,
	wrapper,
	componentFactory,
	templateFactory,
	defaultComponent,
	AppLoader
}