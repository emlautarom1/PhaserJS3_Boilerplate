import phaserLogo from "../assets/phaser.png";

export class MainScene extends Phaser.Scene {
  private phaserSprite!: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload() {
    this.load.image("logo", phaserLogo);
  }

  create() {
    this.phaserSprite = this.add.sprite(400, 300, "logo");
  }
}
