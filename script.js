let count = 0;

document.addEventListener("click", handleClick);

function handleClick(e) {
    if (e.target.matches("span") && e.target.innerText==""){
        if (count%2==0) {
            e.target.style.color = "#7fff00";
            e.target.innerText = 'X';
        }
        else {
            e.target.innerText = '0';
            e.target.style.color = "#e60b29";
        }
        count++;

        buildMatrix();
    }
};

function buildMatrix() {
    let i=0, j=0;
    let matrix = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    const box = document.body.querySelectorAll("span");
    box.forEach(element => {
        //alert(element.textContent); 
        matrix[i][j] = element.textContent;
        j++;
        if (j==3){
            i++;
            j=0;
        }
    })
 
    setTimeout(() => {
        let x = checkWin(matrix);
        if (x==1)
            document.removeEventListener("click", handleClick);
      }, 100);
};

function checkWin(m) {
    for(let i=0;i<3;i++)
        if (m[i][0] == m[i][1] && m[i][1] == m[i][2] && (m[i][0]=='X' || m[i][0]=='0'))
        {
            if (confirm(m[i][0] + ' wins. Proceed to start a new game?')) {
                reset();
            }
            return 1;
        }
    for(let j=0;j<3;j++)
        if (m[0][j] == m[1][j] && m[1][j] == m[2][j] && (m[0][j]=='X' || m[0][j]=='0'))
        {
            if (confirm(m[0][j] + ' wins. Proceed to start a new game?')) {
                reset();
            }
            return 1;
        }
    if (((m[0][0]==m[1][1] && m[1][1] == m[2][2]) || (m[0][2]==m[1][1] && m[1][1]==m[2][0])) && (m[1][1]=='X' || m[1][1]=='0')) {
        if (confirm(m[1][1] + ' wins. Proceed to start a new game?')) {
                reset();
        }
        return 1;
    }
    else {
        let boxCount = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if (m[i][j] == 'X' || m[i][j] == '0')
                    boxCount++;
            }
        }
        if (boxCount == 9)
        {
            if (confirm('It is a TIE! Proceed to start a new game?')) {
                reset();
            }
            return 1;
        }
    }
    return;
}

const button = document.getElementById("reset-button");
button.addEventListener("click", () => {
    reset();
})


function reset() {
    location.reload();
}