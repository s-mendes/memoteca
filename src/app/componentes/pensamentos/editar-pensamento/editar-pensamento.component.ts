import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(pensamento => this.pensamento = pensamento)
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listar-pensamentos']);
  }

}
