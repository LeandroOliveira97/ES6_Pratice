class ContaBancaria {
     agencia;

      constructor() {
        this.agencia = 10010;
        this.nroConta = 100190;
        this.saldo = 50;
        this.limite = 100;
      }

      depositar (valorDeposito) {
        this.saldo += valorDeposito;
      }
      sacar (valorSacado) {
        this.saldo -= valorSacado;
      }
      consultarSaldo () {
        return this.saldo;
      }

}
