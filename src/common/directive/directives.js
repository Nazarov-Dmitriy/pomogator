import tooltipDirective from './tooltip'
import escDirective from './v-esc'

// register all directives
const directives = (app) => {
    tooltipDirective(app)
    escDirective(app)
}

export default directives
