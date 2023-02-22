export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getBalance(): number{
    return this.balance;
  }
  public setBalance(balance: number): void{
    this.balance = balance;
  }

  public deposit(value: number): void {
    if (this.validateStatus()) {
      this.balance += value;
      console.log("Você depositou R$", value);
    }
  }

  public withdraw(value: number): void {
    if (this.validateStatus() && value < this.balance) {
      this.balance -= value;
      console.log("Você sacou R$ ", value);
    } else {
      console.log("Saque invalido! O valor do saque é maior do que o saldo.");
    }
  }

  public validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta invalida");
  }
}
