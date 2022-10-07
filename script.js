function br()
{
    var b1 = document.getElementById('b1').value
    var b2 = document.getElementById('b2').value
    var b3 = document.getElementById('b3').value
    var b4 = document.getElementById('b4').value

    var box = document.getElementById('box')
    var welcome = document.getElementById('welcome')
    var code = document.getElementById('code')

    welcome.style.display = 'none'

    if (b1 == '' || b2 == '' || b3 == '' || b4 == '')
    {
        code.innerHTML = 'ESPAÇO EM BRANCO DETECTADO'
    } else
    {
        if (b1 > 0 || b2 > 0 || b3 > 0 || b4 > 0)
    {
        box.style.borderTopLeftRadius = b1 + "%";
        box.style.borderTopRightRadius = b2 + "%";
        box.style.borderBottomLeftRadius = b3 + "%";
        box.style.borderBottomRightRadius = b4 + "%";

        code.innerHTML = `border-radius: ${b1}px ${b2}px ${b3}px ${b4}px;`
    } else
    {
        code.innerHTML = 'DIGITE UM VALOR VÁLIDO'
    }
    }

}