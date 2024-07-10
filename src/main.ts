import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import DataTable from "primevue/datatable"
import Column from "primevue/column"

const app = createApp(App)

app.use(PrimeVue, {
  theme: { preset: Aura },
})

app.component("PVDataTable", DataTable)
app.component("PVColumn", Column)

app.mount("#app")
