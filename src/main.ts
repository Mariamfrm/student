import { bootstrapApplication } from "@angular/platform-browser"
import { AppComponent } from "./app/app.component"
import { provideRouter } from "@angular/router"
import { provideAnimations } from "@angular/platform-browser/animations"
import { provideHttpClient } from "@angular/common/http"
import { routes } from "./app/app.routes"

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()],
}).catch((err) => console.error(err))
