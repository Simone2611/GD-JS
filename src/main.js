global.Phaser = require("phaser");

import bg from "../assets/bg.jpeg";
import idle from "../assets/icon_1.png";
import block from "../assets/Block_1.png";
import spike from "../assets/spike.png";
import orby from "../assets/orb_yellow.png";
import miniportal from "../assets/miniportal.png";
import normalportal from "../assets/normalportal.png";
import ufo from "../assets/ufo.png";
import wave from "../assets/wave.png";

import cubeportal from "../assets/cubeportal.png";
import waveportal from "../assets/waveportal.png";
import ufoportal from "../assets/ufoportal.png";
var wavep;
var ufop;
var cubep;
var noclipAcc = "off";
var player;
var jump = -270;
var cheat = "";
var platforms;
var mode = "cube";
var Deaths;
var k = true;
var w = true;
var l = true;
if (localStorage.getItem("morti") == null) {
  localStorage.setItem("morti", 0);
}
var minip;
var morti = localStorage.getItem("morti");
var spikes;
var fps;
var cursors;
var speed = 150;
var keyW;
var keyR;
var keySpace;
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
      debug: false,
      fps: 240,
    },
  },

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("bg", bg);
  this.load.image("idle", idle);
  this.load.image("block", block);
  this.load.image("spike", spike);
  this.load.image("orby", orby);
  this.load.image("miniportal", miniportal);
  this.load.image("normalportal", normalportal);
  this.load.image("ufo", ufo);
  this.load.image("wave", wave);

  this.load.image("ufoportal", ufoportal);
  this.load.image("waveportal", waveportal);
  this.load.image("cubeportal", cubeportal);
}

function create() {
  // cheat check
  if (localStorage.getItem("hitbox") == 1) {
    Phaser.Physics.Arcade.StaticBody.prototype.drawDebug =
      Phaser.Physics.Arcade.Body.prototype.drawDebug;
    this.physics.world.createDebugGraphic(true);
    cheat = "on";
  } else {
    cheat = "off";
  }
  // Background

  let bg = this.add.image(-400, 0, "bg").setOrigin(0, 0);

  // Platform

  platforms = this.physics.add.staticGroup();
  //grass
  platforms.create(20, 600, "ground");

  for (let i = -400; i < 20000; i += 100) {
    platforms.create(i, 600, "block");
  }

  // spike
  spikes = this.physics.add.staticGroup();

  spikes.create(400, 537, "spike").setSize(6, 12, true);
  spikes.create(430, 537, "spike").setSize(6, 12, true);
  spikes.create(460, 537, "spike").setSize(6, 12, true);

  spikes.create(600, 537, "spike").setSize(6, 12, true);
  spikes.create(630, 537, "spike").setSize(6, 12, true);
  spikes.create(660, 537, "spike").setSize(6, 12, true);
  // //orb
  // this.orby = this.physics.add.staticGroup();

  // this.orby.create(800, 490, "orby").setCircle(10).refreshBody();

  // //slab
  // platforms.create(649, 500, "slab");
  // platforms.create(500, 480, "slab");
  // platforms.create(400, 440, "slab");
  // platforms.create(380, 340, "slab");
  // //blocchi
  // platforms.create(300, 560, "block2");
  // platforms.create(300, 520, "block2");

  // END
  // this.end = this.physics.add.staticGroup();
  // this.end.create(380, 318, "end").setScale(0.5).refreshBody().setSize(20, 30);
  // this.physics.add.overlap(player, this.end, nextlvl, null, this);

  // mini

  minip = this.physics.add.staticGroup();

  minip.create(800, 500, "miniportal");
  // normal

  normp = this.physics.add.staticGroup();

  normp.create(900, 500, "normalportal");
  // player

  player = this.physics.add.sprite(20, 300, "idle");

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(player, spikes, hitspike, null, this);

  this.physics.add.overlap(player, minip, mini, null, this);
  this.physics.add.overlap(ufo, minip, mini, null, this);

  this.physics.add.overlap(player, normp, normal, null, this);
  this.physics.add.overlap(ufo, normp, normal, null, this);
  // this.physics.add.overlap(player, this.orby);
  cursors = this.input.keyboard.createCursorKeys();
  //score

  fps = this.add.text(20, 300, Math.round(game.loop.actualFps) + " FPS", {
    fontSize: "1.2rem",
    fill: "whitesmoke",
    fontFamily: "Arial",
  });

  Deaths = this.add.text(20, 470, morti + " Attempt", {
    fontSize: "1.2rem",
    fill: "whitesmoke",
    fontFamily: "Arial",
  });

  //portals
  wavep = this.physics.add.staticGroup();
  cubep = this.physics.add.staticGroup();
  ufop = this.physics.add.staticGroup();

  wavep.create(1000, 500, "waveportal");
  cubep.create(1400, 500, "cubeportal");
  ufop.create(1800, 500, "ufoportal");

  this.physics.add.overlap(player, wavep, wavemode, null, this);
  this.physics.add.overlap(player, cubep, cubemode, null, this);
  this.physics.add.overlap(player, ufop, ufomode, null, this);

  // WASD
  keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  this.cameras.main.startFollow(player);
  this.cameras.main.setDeadzone(null, 400);

  player.setY(520);
}

function update() {
  noclipAcc = localStorage.getItem("noclip");
  //spike

  let controls = localStorage.getItem("gamekey");
  let space = localStorage.getItem("spacebar");
  // Player movement
  // this.checkpoint.anims.play("flag", true);
  if (mode != "cube") {
    if (mode == "ufo") {
      player.setSize(30, 30);
      player.setTexture("ufo");

      if (controls == "arrow") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 0, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 0, //duration is in milliseconds
            persist: true,
          });
        }
        if (cursors.up.isDown && l == false) {
          player.setVelocityY(jump);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: +0.5, //rotation value must be radian
            duration: 400, //duration is in milliseconds
            persist: true,
          });
          l = true;
        }
        if (cursors.up.isUp) {
          l = false;
        }
      } else if (controls == "wad") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 400, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed);
        }

        if (keyW.isDown && w == false) {
          player.setVelocityY(jump);
          w = true;
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: +0.5, //rotation value must be radian
            duration: 400, //duration is in milliseconds
            persist: true,
          });
        }
        if (keyW.isUp) {
          w = false;
        }
      }
      if (space == "on") {
        if (keySpace.isDown && k == false) {
          player.setVelocityY(jump);
          k = true;
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: +0.5, //rotation value must be radian
            duration: 400, //duration is in milliseconds
            persist: true,
          });
        }
        if (keySpace.isUp) {
          k = false;
        }
      }
    } else if (mode == "wave") {
      player.setTexture("wave");
      player.setSize(13, 13);
      if (controls == "arrow") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed);
          player.setVelocityY(-jump);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 1, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 0, //duration is in milliseconds
            persist: true,
          });
        }
        if (cursors.up.isDown) {
          player.setVelocityY(jump);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: -1, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        }
        if (cursors.up.isUp) {
        }
      } else if (controls == "wad") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed);
        } else {
          player.setVelocityX(speed);
        }

        if (keyW.isDown) {
          player.setVelocityY(jump);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: -1, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        }
        if (keyW.isUp) {
        }
      }
      if (space == "on") {
        if (keySpace.isDown) {
          player.setVelocityY(jump);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: -1, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        }
        if (keySpace.isUp) {
        }
      }
    }
  } else {
    player.setTexture("idle");
    player.setSize(30, 30);
    if (controls == "arrow") {
      if (!player.body.touching.down) {
        player.setVelocityX(speed);
      } else {
        player.setVelocityX(speed);
        this.tweens.add({
          targets: player, //your image that must spin
          rotation: 0, //rotation value must be radian
          duration: 0, //duration is in milliseconds
          persist: true,
        });
      }
      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(jump);

        this.tweens.add({
          targets: player, //your image that must spin
          rotation: +1.55, //rotation value must be radian
          duration: 400, //duration is in milliseconds
          persist: true,
        });
      }
    } else if (controls == "wad") {
      if (!player.body.touching.down) {
        player.setVelocityX(speed);
        this.tweens.add({
          targets: player, //your image that must spin
          rotation: 0, //rotation value must be radian
          duration: 400, //duration is in milliseconds
          persist: true,
        });
      } else {
        player.setVelocityX(speed);
      }

      if (keyW.isDown && player.body.touching.down) {
        player.setVelocityY(jump);
        this.tweens.add({
          targets: player, //your image that must spin
          rotation: +1.55, //rotation value must be radian
          duration: 400, //duration is in milliseconds
          persist: true,
        });
      }
    }
    if (space == "on") {
      if (keySpace.isDown && player.body.touching.down) {
        player.setVelocityY(jump);
        this.tweens.add({
          targets: player, //your image that must spin
          rotation: +1.55, //rotation value must be radian
          duration: 400, //duration is in milliseconds
          persist: true,
        });
      }
    }
  }

  if (keyR.isDown) {
    morti++;
    mode = "cube";
    player.scale = 1;
    jump = -270;
    player.setX(20);
    player.setY(520);
  }

  fps.setText(Math.round(game.loop.actualFps) + " FPS");
  Deaths.setText(morti + " Attempts");
  if (localStorage.getItem("noclip") == "on") {
    this.physics.add.overlap(player, platforms);
    this.physics.add.overlap(player, spikes, hitspike, null, this);
  }
}

function hitspike(player, spikes) {
  morti++;
  mode = "cube";
  localStorage.setItem("morti", morti);
  if (noclipAcc == "on") {
    cheat = "on";
  } else {
    player.scale = 1;
    jump = -270;
    player.setX(20);
    player.setY(520);
  }
}

function nextlvl() {
  if (cheat == "on") {
  } else {
    window.location.href = window.location.origin + "/level1.html";
  }
}

function checkpointsave() {
  if (cheat == "on") {
  } else {
    localStorage.setItem("tuto-x", 20);
    localStorage.setItem("tuto-y", 380);
  }
}

function mini(player, minip) {
  // player.setSize(10, 10);
  if (mode == "wave") {
    jump = -400;
  } else {
    jump = -200;
  }
  player.scale = 0.5;
}

function normal(player, minip) {
  // player.setSize(10, 10);

  jump = -270;
  if (player.scale != 1) {
    player.setY(player.body.position.y - 20);
  }

  player.scale = 1;
}

function ufomode(player, ufop) {
  mode = "ufo";
}
function wavemode(player, ufop) {
  mode = "wave";
}
function cubemode(player, ufop) {
  mode = "cube";
}
