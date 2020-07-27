let left = document.getElementById("left");
let right = document.getElementById("right");
let plyName = prompt("名前を入力してください");
let flag = true;
//プレイヤーデータ
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [5, 15, 40, 85, 120, 150, 185, 230, 270, 300, 340, 380];
let plyImg = document.getElementById("plyImg");
let plySt = new Array(7);
plySt = document.getElementById[(0, 1, 2, 3, 4, 5, 6)];
plySt0.textContent = plyName;
//プレイヤー回復
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC.png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});
//敵データ
let a = 0;
let eneLv = 1;
let eneHp = new Array(10);
eneHp = [10, 20, 35, 55, 80, 110, 145, 185, 230, 250];
let eneHpMax = new Array(10);
eneHpMax = [10, 20, 35, 55, 80, 110, 145, 185, 230, 250];
let eneAtt = new Array(10);
eneAtt = [1, 2, 3, 5, 7, 10, 13, 17, 21, 26];
let eneKill = 0;
let eneExp = new Array(10);
eneExp = [1, 2, 3, 5, 7, 10, 13, 17, 21, 26];
let eneCnt = new Array(10);
eneCnt = [7, 8, 6, 6, 5, 5, 5, 4, 4, 4];
let eneCntMax = new Array(10);
eneCntMax = [7, 7, 6, 6, 5, 5, 5, 4, 4, 4];
let eneSt = new Array(5);
eneSt = document.getElementById[(0, 1, 2, 3, 4)];
//敵を攻撃
{
  left.addEventListener("click", () => {
    if (flag) {
      if (a > 0) {
        a = a - 1;
        eneImg.src = "img/enemyA" + a + ".png";
        eneSt0.textContent = "モンスター" + a;
        eneSt1.textContent = "レベル:" + (a + 1);
        eneSt2.textContent = "HP:" + eneHpMax[a];
        eneSt3.textContent = "攻撃力:" + eneAtt[a];
      }
    }
  });

  right.addEventListener("click", () => {
    if (flag) {
      if (a < 9) {
        a = a + 1;
        eneImg.src = "img/enemyA" + a + ".png";
        eneSt0.textContent = "モンスター" + a;
        eneSt1.textContent = "レベル:" + (a + 1);
        eneSt2.textContent = "HP:" + eneHpMax[a];
        eneSt3.textContent = "攻撃力:" + eneAtt[a];
      }
    }
  });

  eneImg.addEventListener("mousedown", () => {
    if (eneHp[9] < 0) {
      eneImg.src = "img/clear.png";
      flag = false;
      eneSec.textContent = "ゲームクリア";
    }
    if (flag) {
      eneImg.src = "img/enemyB" + a + ".png";
    }
  });
  eneImg.addEventListener("mouseup", () => {
    if (flag) {
      eneImg.src = "img/enemyA" + a + ".png";
      if (eneHp[a] > 0) {
        eneHp[a] -= plyAtt;
        eneSt2.textContent = "HP:" + eneHp[a];
      } else {
        eneHp[a] = eneHpMax[a];
        eneKill++;
        eneSt4.textContent = "倒した回数:" + eneKill;
        //経験値の処理
        plyExp += eneExp[a];
        plySt5.textContent = "経験値:" + plyExp;
        plyExpNext -= eneExp[a];
        //レベルアップの処理
        if (plyExpNext < 0) {
          plyExpNext = plyExpNeed[plyLv];
          plyLv++;
          plySt1.textContent = "レベル:" + plyLv;
          plyHpMax = plyLv * 3 + 6;
          plyHp = plyHpMax;
          plySt2.textContent = "HP:" + plyHp;
          plyAtt++;
          plySt3.textContent = "攻撃力:" + plyAtt;
          plyHeal = Math.floor(0.4 * plyLv) + 1;
          plySt4.textContent = "回復魔法:" + plyHeal;
        }
        plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
      }
      eneSt2.textContent = "HP:" + eneHp[a];
    }
  });
  //敵が時間ごとに攻撃
  let eneSec = document.getElementById("eneSec");
  let loop = setInterval(() => {
    if (eneHp[9] < 0) {
      eneImg.src = "img/clear.png";
      flag = false;
      eneSec.textContent = "ゲームクリア";
    } else if (eneCnt[a] > 0) {
      eneCnt[a]--;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt[a] + "秒";
    } else {
      plyImg.src = "img/playerB.png";
      plyHp -= eneAtt[a];
      if (plyHp > 0) {
        plySt2.textContent = "HP:" + plyHp;
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt[a] + "秒";
      } else {
        plyHp = 0;
        clearInterval(loop);
        flag = false;
        plySt2.textContent = "HP:" + plyHp;
        eneSec.textContent = "ゲームオーバー";
      }
      setTimeout(() => {
        if (flag) {
          eneCnt[a] = eneCntMax[a];
          plyImg.src = "img/playerA.png";
          eneSec.textContent = "モンスターの攻撃まで" + eneCnt[a] + "秒";
        }
      }, 500);
    }
  }, 1000);
}
