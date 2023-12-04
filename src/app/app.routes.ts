import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployersLayoutComponent } from './layouts/employers-layout/employers-layout.component';
import { CompanyManagerComponent } from './pages/company-manager/company-manager.component';
import { DashboardEmployersComponent } from './pages/dashboard-employers/dashboard-employers.component';
import { authGuardGuard } from './auth-guard/auth-guard.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { adminGuardGuard } from './auth-guard/admin-guard.guard';
import { MyJobComponent } from './pages/my-job/my-job.component';
import { employersGuardGuard } from './auth-guard/employers-guard.guard';
import { CompaniesComponent } from './pages/companies/companies.component';
import { JobsComponent } from './pages/jobs/jobs.component';

export const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'companies', component: CompaniesComponent },
            { path: 'jobs', component: JobsComponent },
            { path: 'profile', component: ProfileComponent, canActivate: [authGuardGuard] },
            { path: 'my-job', component: MyJobComponent, canActivate: [authGuardGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]

    },
    {
        path: 'for-employers', component: EmployersLayoutComponent, canActivate: [employersGuardGuard], children: [
            { path: 'dashboard', component: DashboardEmployersComponent },
            { path: 'company', component: CompanyManagerComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: 'admin', component: AdminLayoutComponent, canActivate: [adminGuardGuard], children: [
            { path: 'dashboard', component: DashboardAdminComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'not-found', component: NotFoundComponent }
];
