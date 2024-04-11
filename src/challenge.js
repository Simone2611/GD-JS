global.Phaser = require("phaser");

import bg from "../assets/bg2.png";
import idle from "../assets/icon_1.png";
import block from "../assets/blackground.png";
import slab from "../assets/slab.png";
import block2 from "../assets/blockdefault.png";
import spike from "../assets/spike.png";
import spikeflip from "../assets/spikeflip.png";
import orby from "../assets/orb_yellow.png";
import miniportal from "../assets/miniportal.png";
import normalportal from "../assets/normalportal.png";
import ufo from "../assets/ufo.png";
import wave from "../assets/wave.png";

import cubeportal from "../assets/cubeportal.png";
import waveportal from "../assets/waveportal.png";
import ufoportal from "../assets/ufoportal.png";

import speedX05 from "../assets/speed05.png";
import speedX2 from "../assets/2speed.png";
import speedX1 from "../assets/speed1.png";
import speedX3 from "../assets/speed3.png";
import speedX4 from "../assets/speed4.png";

import saw1 from "../assets/Saw.png";
if (localStorage.getItem("anticheat") == null) {
  localStorage.setItem("anticheat", "on");
}
var n = 0;
var hackss = localStorage.getItem("anticheat");
var speed05;
var speed1;
var gravity = "normal";
var jumpwave = -300;
var speed2;
var speed3;
var speed4;
var normp;
var wavep;
var miniplayer = false;
var ufop;
var keyEsc;
var cubep;
var noclipAcc = "off";
var player;
if (localStorage.getItem("speedhack") == null) {
  localStorage.setItem("speedhack", 1);
}
var speedhack = 1;
var jump = -250;
var cheat = "";
var platforms;
var mode = "cube";
var Deaths;
var k = true;
var w = true;
var l = true;
if (localStorage.getItem("morti-ch") == null) {
  localStorage.setItem("morti-ch", 0);
}
if (localStorage.getItem("gamekey") == null) {
  localStorage.setItem("gamekey", "arrow");
  window.location.reload;
}
var minip;
var morti = localStorage.getItem("morti-ch");
var spikes;
var fps;
var cursors;
var speed = 200 * speedhack;
var SpeedX = "05";
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
      gravity: { y: 700 },
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
  this.load.image("saw", saw1);
  this.load.image("slab", slab);
  this.load.image("idle", idle);
  this.load.image("block", block);
  this.load.image("block2", block2);
  this.load.image("spike", spike);
  this.load.image("spikeflip", spikeflip);
  this.load.image("orby", orby);
  this.load.image("miniportal", miniportal);
  this.load.image("normalportal", normalportal);
  this.load.image("ufo", ufo);
  this.load.image("wave", wave);

  this.load.image("ufoportal", ufoportal);
  this.load.image("waveportal", waveportal);
  this.load.image("cubeportal", cubeportal);

  this.load.image("speed05", speedX05);
  this.load.image("speed1", speedX1);
  this.load.image("speed2", speedX2);
  this.load.image("speed3", speedX3);
  this.load.image("speed4", speedX4);
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

  this.add.image(-400, 0, "bg").setOrigin(0, 0);
  for (let i = 1100; i < 30000; i += 1500) {
    this.add.image(i, 0, "bg").setOrigin(0, 0);
  }
  // Platform

  platforms = this.physics.add.staticGroup();
  //grass

  for (let i = -400; i < 300000; i += 100) {
    platforms.create(i, 600, "block");
  }
  // saw
  saw = this.physics.add.staticGroup();
  saw.create(2000, 430, "saw").setSize(15, 15).setCircle(10).refreshBody();
  // spike
  spikes = this.physics.add.staticGroup();
  spikes.create(360, 480, "spikeflip").setSize(6, 12, true);
  spikes.create(400, 537, "spike").setSize(6, 12, true);
  spikes.create(430, 537, "spike").setSize(6, 12, true);

  spikes.create(600, 537, "spike").setSize(6, 12, true);
  spikes.create(630, 537, "spike").setSize(6, 12, true);

  spikes.create(1100, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(1130, 540, "spike").setSize(6, 12, true);
  spikes.create(1160, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(1190, 540, "spike").setSize(6, 12, true);
  spikes.create(1220, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(1250, 540, "spike").setSize(6, 12, true);

  spikes.create(1280, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(1310, 540, "spike").setSize(6, 12, true);
  spikes.create(1340, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(1380, 540, "spike").setSize(6, 12, true);

  spikes.create(1950, 500, "spikeflip").setSize(6, 12, true);
  spikes.create(2000, 540, "spike").setSize(6, 12, true);

  spikes.create(2400, 460, "spikeflip").setSize(6, 12, true);
  spikes.create(2400, 500, "spike").setSize(6, 12, true);
  //   spikes.create(1225, 544, "spike").setSize(6, 12, true).scale = 0.5;

  // //orb
  // this.orby = this.physics.add.staticGroup();

  // this.orby.create(800, 490, "orby").setCircle(10).refreshBody();

  //slab
  platforms.create(360, 460, "slab");

  platforms.create(1400, 460, "slab");
  platforms.create(1440, 460, "slab");
  platforms.create(1480, 460, "slab");
  platforms.create(1520, 460, "slab");
  platforms.create(1560, 460, "slab");

  platforms.create(1950, 480, "slab");
  platforms.create(2400, 440, "slab");
  platforms.create(2400, 520, "slab");

  // blocks
  for (let i = 472; i > 30; i -= 30) {
    platforms.create(1100, i, "block2");
  }
  for (let i = 472; i > 30; i -= 30) {
    platforms.create(1160, i, "block2");
  }
  for (let i = 472; i > 30; i -= 30) {
    platforms.create(1220, i, "block2");
  }
  for (let i = 472; i > 30; i -= 30) {
    platforms.create(1280, i, "block2");
  }
  for (let i = 472; i > 30; i -= 30) {
    platforms.create(1340, i, "block2");
  }
  // END
  // this.end = this.physics.add.staticGroup();
  // this.end.create(380, 318, "end").setScale(0.5).refreshBody().setSize(20, 30);
  // this.physics.add.overlap(player, this.end, nextlvl, null, this);

  // mini

  minip = this.physics.add.staticGroup();

  minip.create(20, 500, "miniportal");

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

  Deaths = this.add.text(20, 440, morti + " Attempt", {
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
  cubep.create(2700, 500, "cubeportal");
  this.physics.add.overlap(player, wavep, wavemode, null, this);
  this.physics.add.overlap(player, cubep, cubemode, null, this);
  this.physics.add.overlap(player, ufop, ufomode, null, this);
  // speed
  speed05 = this.physics.add.staticGroup();
  speed1 = this.physics.add.staticGroup();
  speed2 = this.physics.add.staticGroup();
  speed3 = this.physics.add.staticGroup();
  speed4 = this.physics.add.staticGroup();

  speed4.create(800, 540, "speed4");
  speed4.create(800, 510, "speed4");
  speed4.create(800, 480, "speed4");
  speed4.create(800, 450, "speed4");
  speed4.create(1600, 500, "speed4");
  this.physics.add.overlap(player, speed05, speedchangeN, null, this);
  this.physics.add.overlap(player, speed1, speedchange1, null, this);
  this.physics.add.overlap(player, speed2, speedchange2, null, this);
  this.physics.add.overlap(player, speed3, speedchange3, null, this);
  this.physics.add.overlap(player, speed4, speedchange4, null, this);

  // WASD
  keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  this.cameras.main.startFollow(player);
  this.cameras.main.setDeadzone(null, 400);

  player.setY(510);
  trail = this.add.graphics();

  prevX = player.x;
  prevY = player.y;
}

function update() {
  if (gravity != "normal") {
    // dopo mettere qualcosa per portale giallo
  } else {
  }

  if (miniplayer == true) {
    jump = -200;
    if (mode == "wave") {
      waveR = 1.3;
      if (SpeedX == "05") {
        jumpwave = -400;
      } else if (SpeedX == "1") {
        jumpwave = -550;
      } else if (SpeedX == "2") {
        jumpwave = -600;
      } else if (SpeedX == "3") {
        jumpwave = -700;
      } else if (SpeedX == "4") {
        jumpwave = -900;
      }
    } else {
    }
  } else {
    waveR = 1;
    jumpwave = -200;
    if (SpeedX == "05") {
      jumpwave = -200;
    } else if (SpeedX == "1") {
      jumpwave = -250;
    } else if (SpeedX == "2") {
      jumpwave = -350;
    } else if (SpeedX == "3") {
      jumpwave = -450;
    } else if (SpeedX == "4") {
      jumpwave = -500;
    }
  }
  if (speedhack != 1) {
    cheat = "on";
  }

  noclipAcc = localStorage.getItem("noclip");
  speedhack = localStorage.getItem("speedhack");

  //spike

  let controls = localStorage.getItem("gamekey");
  let space = localStorage.getItem("spacebar");
  player.setVelocityX(speed * speedhack);

  // Player movement
  // this.checkpoint.anims.play("flag", true);
  if (mode != "cube") {
    if (mode == "ufo") {
      player.setTexture("ufo");

      player.setSize(20, 20);

      if (controls == "arrow") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed * speedhack);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 0, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed * speedhack);
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
          player.setVelocityX(speed * speedhack);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 400, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed * speedhack);
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
      player.setSize(12, 12);
      if (controls == "arrow") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed * speedhack);
          player.setVelocityY(-jumpwave);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: waveR, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        } else {
          player.setVelocityX(speed * speedhack);
          this.tweens.add({
            targets: player, //your image that must spin
            rotation: 0, //rotation value must be radian
            duration: 0, //duration is in milliseconds
            persist: true,
          });
        }
        if (cursors.up.isDown) {
          player.setVelocityY(jumpwave);

          this.tweens.add({
            targets: player, //your image that must spin
            rotation: -waveR, //rotation value must be radian
            duration: 20, //duration is in milliseconds
            persist: true,
          });
        }
        if (cursors.up.isUp) {
        }
      } else if (controls == "wad") {
        if (!player.body.touching.down) {
          player.setVelocityX(speed * speedhack);
        } else {
          player.setVelocityX(speed * speedhack);
        }

        if (keyW.isDown) {
          player.setVelocityY(jumpwave);
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
          player.setVelocityY(jumpwave);
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
        player.setVelocityX(speed * speedhack);
      } else {
        player.setVelocityX(speed * speedhack);
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
        player.setVelocityX(speed * speedhack);
        this.tweens.add({
          targets: player, //your image that must spin
          rotation: 0, //rotation value must be radian
          duration: 400, //duration is in milliseconds
          persist: true,
        });
      } else {
        player.setVelocityX(speed * speedhack);
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
    mode = "cube";
    player.scale = 1;
    speed = 200;
    jump = -250;
    SpeedX = "05";
    miniplayer = false;
    player.setX(20);
    player.setY(300);
    player.setY(510);
    trail.clear();
  }

  fps.setText(Math.round(game.loop.actualFps) + " FPS");
  Deaths.setText(morti + " Attempts");
  if (localStorage.getItem("noclip") == "on") {
    this.physics.add.overlap(player, platforms);
    this.physics.add.overlap(player, spikes, hitspike, null, this);
  }

  if (mode == "wave") {
    trail.lineStyle(2, 0xffffff, 0.5);
    trail.moveTo(player.x, player.y);
    trail.lineTo(prevX, prevY);
    trail.strokePath();

    prevX = player.x;
    prevY = player.y;
    n++;
    if (n == 200) {
      trail.clear();
      n = 0;
    }
  } else {
    trail.clear();
    prevX = player.x;
    prevY = player.y;
  }
}

function hitspike(player, spikes) {
  morti++;

  localStorage.setItem("morti", morti);
  if (noclipAcc == "on") {
    cheat = "on";
  } else {
    player.scale = 1;
    mode = "cube";
    jump = -250;
    speed = 200;
    SpeedX = "05";
    miniplayer = false;
    player.setX(20);
    player.setY(300);
    player.setY(510);
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

  miniplayer = true;
  player.scale = 0.6;
}

function normal(player, minip) {
  // player.setSize(10, 10);
  miniplayer = false;
  jump = -250;

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
function speedchangeN() {
  SpeedX = "05";
  speed = 200;
  jump = -250;
}

function speedchange1() {
  SpeedX = "1";
  speed = 250;
  jump = -240;
}

function speedchange2() {
  SpeedX = "2";
  speed = 300;
  jump = -230;
}

function speedchange3() {
  SpeedX = "3";
  speed = 400;
  jump = -220;
}
function speedchange4() {
  SpeedX = "4";
  speed = 500;
  jump = -210;
}
