// src/plugins/vuetify.js
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {VNumberInput} from 'vuetify/labs/VNumberInput'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    components: {
        ...components,
        VNumberInput,
    },
    directives,
})