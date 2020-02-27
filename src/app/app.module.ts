import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NewbatchComponent } from './newbatch/newbatch.compoment';
import { HomeworkComponent } from './Homework/Homework.component';
import { ProgramComponent } from './program/program.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobilePipe } from './mobile/mobile.pipe';
import { IfforswitchComponent } from './if_for_switch/if_for_switch.component';
import { IfPipe, IfCube, IfAddition, IfSubtraction, IfMultiplication, IfDivision } from './if_for_switch/if_for_switch.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComponent } from './service/service.component';
import { ExampleComponent } from './exapmle/example.component';
import { EmpService } from './service1/emp.service1';
import { EmpComponent } from './emp/emp.component';
import { CollegeComponent } from './college/college.component';
import { DetialComponent } from './detail/detail.component';
import { DemoService } from './service/demo.service';
import { PracticeComponent } from 'practice/practice.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NewbatchComponent,
    HomeworkComponent,
    ProgramComponent,
    MobileComponent,
    MobilePipe,
    IfforswitchComponent,
    IfPipe,
    IfCube,
    IfAddition,
    IfSubtraction,
    IfMultiplication,
    IfDivision,
    PipeComponent,
    ServiceComponent,
    ExampleComponent,
    EmpComponent,
    CollegeComponent,
    DetialComponent,
    DemoService,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
