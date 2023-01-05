import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//mis componentes

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent} from "./education/education.component";

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "header", component: HeaderComponent },
  {path: "about", component: AboutComponent },
  {path: "experience", component: ExperienceComponent },
  {path: "skills", component: SkillsComponent },
  {path: "projects", component: ProjectsComponent },
  {path: "contact", component: ContactComponent },
  {path: "footer", component: FooterComponent },
  {path: "education", component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
