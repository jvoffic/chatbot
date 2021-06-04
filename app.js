const save = document.getElementById('poga');

save.onclick = function () {
    let name = document.getElementById('name').value;

    document.getElementById('p').innerHTML = "Sveiks" + " " + name + "!";
}
