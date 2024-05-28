import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CalculatorComponent } from './calculator/calculator.component';


export const routes: Routes = [
    {
        path: '',
        component: FormComponent
    },
    {
        path:'form',
        component: FormComponent
    },
    {
        path:'cal',
        component: CalculatorComponent
    }

]

