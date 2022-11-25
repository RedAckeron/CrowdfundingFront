import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  //Verification de la date entrée
  PrjChkDtIn(): ValidatorFn | null {
    return (control: AbstractControl) => {
      if (dayjs(control.value).format('YYYY/MM/DD') >= (dayjs(new Date()).format('YYYY/MM/DD'))) {
        return null;
      }
      else {
        return { ChkDtIn: true }
      }
    }
  }
  
  //si la diff est plus grande que5 ans sa renvoi error
  PrjChkDtOut(form: FormGroup) {
    let dt_in = dayjs(form.value['PrjDtIn']);
    let dt_out = dayjs(form.value['PrjDtOut']);
    let dtoutmin = dt_in.add(28, 'day');

    //console.log(dt_out.format('DD/MM/YYYY'));
    //console.log(dtoutmin.format('DD/MM/YYYY'));

    if (dt_out > dtoutmin) {
      //console.log("Il y a plus de 28 jours");
      return null
    }
    else {
      //console.log("Il y a moins de 28 jours");
      return { min28day: true }
    }
  }

  //si la diff est plus grande que 28 jours sa renvoi error
  PrjValidatorDateDiff(form: FormGroup) {
    let dt_in = dayjs(form.value['PrjDtIn']);
    let dt_out = dayjs(form.value['PrjDtOut']);
    if (((dt_out.diff(dt_in)) / 1000) > (31536000 * 5)) {
      return { max5yr: true }
    }
    else {
      return null
    }
  }


}
