function tinhTong()
{
   let numberOne = parseInt(document.getElementById("numberOne").value);
   let numberTwo = parseInt(document.getElementById("numberTwo").value);
   let sum = numberOne + numberTwo;
   document.getElementById("result").value = sum.toString();
}
function tinhHieu()
{
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    let brand = numberOne - numberTwo;
    document.getElementById("result").value =  brand.toString();
}
function tinhTich()
{
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    let volume = numberOne * numberTwo;
    document.getElementById("result").value = volume.toString();
}
function tinhThuong()
{
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    if (numberTwo === 0)
    {
        alert("Số thứ hai không được bằng 0 !");
    }
    else
    {
        let lance = numberOne / numberTwo;
        document.getElementById("result").value = lance.toString();
    }


}
