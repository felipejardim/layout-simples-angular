import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  daOi(a:String){
    let selecao:any = this.opcoes.filter(i => i.nome == a)[0];
    location.href = selecao.link;
  }

  value: string = "";
  opcoes = [
    {nome: "Inicio", link:"/"},
    {nome: "Mussun", link:"/mussun"},
    {nome: "Loren", link:"/loren"},
  ]
  opcoesDaLista!:Observable<String[]> 

  form = new FormControl('');

  private filtro(texto: string): string[] {
    const valorFiltrado = texto.toLowerCase();

    return this.opcoes.map(i => i.nome).filter(i => i.toLowerCase().includes(valorFiltrado));}

    

  ngOnInit(): void {
    this.opcoesDaLista = this.form.valueChanges.pipe(startWith(''), map(value => this.filtro(value || '')))
  }

  
}
