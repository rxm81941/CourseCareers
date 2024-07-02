let count = document.getElementById("counter").value;


function Up() {
    count++;
    document.getElementById("co").innerHTML = count;
    console.log(count)
    }

function Down() {
    count--;
    document.getElementById("co").innerHTML = count;
    console.log(count)
    }

function Reset() {
    count = 0
    document.getElementById("co").innerHTML = count;
}

