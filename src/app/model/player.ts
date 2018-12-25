export class Player {
  public name: String;
  public birthDate: Date;
  public birthPlace: String;
  public height: String;
  public playerPosition: String;
  public playerNumber: Number;
  public photo: String;

  constructor(name: String, birthDate: Date, birthPlace: String, height: String,
    playerPosition: String, playerNumber: Number, photo: String) {
    this.name = name;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
    this.height = height;
    this.playerPosition = playerPosition;
    this.playerNumber = playerNumber;
    this.photo = photo;
  }
}
