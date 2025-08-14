function show_text_file2(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");



    if(input.value === ""){
        output.innerText = "Nhập cái gì dùm tui đi";
    } else {
        output.innerText = "Cổ nhập \"" + input.value + "\" chứ gì";
    }
}