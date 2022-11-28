import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../models/User/Token';

@Injectable({
  providedIn: 'root'
})
export class TokenDecodeService {

  constructor() { }

  decode(token : Token) : string | null {
    return jwtDecode(token.token)
  }
}
