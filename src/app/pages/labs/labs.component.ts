import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Instalar el Angular Cli',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Esteban');
  age = 23;
  disable = true;
  ima = 'https://w3schools.com/howto/img_avatar.png';
  person = signal({
    name: 'Esteban',
    age: 23,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable:true,
  });
  nameCtrl = new FormControl('Esteban',{
    nonNullable:true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });


  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler(){
    alert('!Hola como estas!')
  }

  changeHandler(event:Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  changeAge(event:Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue,10)
      }
    });
  }

  changeName(event:Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    });
  }

  keydownHandler(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
