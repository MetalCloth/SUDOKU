var numselect = null;
var tiles = null;
window.onload = function () {
    setgame();
}
var valo = 0;
var errors = 0;
let jaja = document.getElementById("blocks");
const win = 0;
var lastSelected = null;
var board = [
    "---26-7-1",
    "68--7--9-",
    "19---45--",
    "82-1---4-",
    "--46-29--",
    "-5---3-28",
    "--93---74",
    "-4--5--36",
    "7-3-18---"
]

var solution = [
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
]
var count = [
    4, 4, 4, 5,
    3, 4,
    4, 4, 4
]

function setgame() {
    //<div id="1" class="nigg numbers">23</div>
    for (let i = 1; i <= 9; i++) {
        let num = document.createElement("div");
        num.id = i;
        num.className = "nigg";
        num.innerText = i;
        num.addEventListener("click", function () {

            if (numselect != null) {
                numselect.classList.remove("sambar");


            }
            numselect = this;

            hightlight();

            dehigh();
            numselect.classList.add("sambar");

        });
        num.classList.add("numbers");

        document.getElementById("digits").appendChild(num);
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = document.createElement("div");
            num.id = i.toString() + "-" + j.toString();
            if (board[i][j] != "-") {
                num.innerText = board[i][j];
            }
            num.addEventListener("click", selectontiles);
            if (i == 0) {
                num.classList.add("firstrow");
            }
            if (j == 0) {
                num.classList.add("firstcolumn");
            }
            if (i == 8) {
                num.classList.add("lastrow");
            }
            if (j == 8) {
                num.classList.add("lastcolumn");
            }
            num.classList.add("big");

            if (i == 2 || i == 5) {
                num.classList.add("horizontal");
            }
            if (j == 2 || j == 5) {
                num.classList.add("vertical");
            }

            document.getElementById("blocks").append(num);
        }
    }
}

function selectontiles() {
    if (numselect && errors < 3) {
        if (this.innerText == "") {
            hightlight();
            this.innerText = numselect.id;
            hightlight();
            correctness(this);
        }
    }
    if (!numselect && errors <= 3) {
        let m = this.id;
        let cum = this.id.split("-");
        let r = parseInt(cum[0]);
        let c = parseInt(cum[1]);

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let x = document.getElementById(`${i.toString()}-${j.toString()}`);
                if (x.innerText == board[r][c]) {
                    x.style.backgroundColor = "#7CB9E8";
                }
            }
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    let x = document.getElementById(`${i.toString()}-${j.toString()}`);
                    if (x.innerText != board[r][c]) {
                        x.style.backgroundColor = "white";
                    }
                }
            }
        }
    }

}
function correctness(m) {
    //numselect.id;

    let cum = m.id.split("-");
    let r = parseInt(cum[0]);
    let c = parseInt(cum[1]);
    if (m.innerText == solution[r][c]) {
        count[m.innerText - '1']++;
        if (count[m.innerText - '1'] == 9) {
            valo++;
            uwin();
            let element = document.getElementById(`${m.innerText}`);
            element.classList.add("hide");
            numselect = null;
        }

        m.style.color = "#3457D5";
        m.backgroundColor = "white";

    }
    else {
        errors++;
        let b = document.getElementById("errors");
        if (errors >= 3) {
            jaja.classList.add("blur");
            ulose();

        }
        b.innerText = errors;
        m.style.color = "#FF033E";
        m.backgroundColor = "white";

        removeNumberAfterDelay(m);
    }

}
function removeNumberAfterDelay(m) {
    setTimeout(() => {
        m.textContent = "";
        dehigh();
    }, 1100);
}
function hightlight() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let x = document.getElementById(`${i.toString()}-${j.toString()}`);
            if (x.innerText == numselect.innerText) {
                x.style.backgroundColor = "#73C2FB";
            }
        }

    }
}
function uwin() {
    if (valo == 9 && errors < 1000) {
        jaja.classList.add("blur");
        let y = document.getElementById('you-lose');
        y.classList.remove('hidden');
        y.style.color = "blue";
        y.innerText = "YOU WIN";
        setTimeout(() => {
            y.innerText = `YOU WIN`;
        }, 3000);
    }
}
function ulose() {
    let y = document.getElementById('you-lose');
    y.classList.remove('hidden');
    setTimeout(() => {
        y.innerText = `YOU LOSE BITCH`;
    }, 3000);
}
function dehigh() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let x = document.getElementById(`${i.toString()}-${j.toString()}`);
            if (x.innerText != numselect.innerText) {
                x.style.backgroundColor = "white";
            }
        }
    }
}
